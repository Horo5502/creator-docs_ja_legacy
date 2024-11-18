# Description: This script monitors the 'docs_all' directory and copies the files to '.docs' directory when a change is detected.

$projectRoot = [System.Environment]::GetEnvironmentVariable('PROJECT_ROOT')

# Path of the directory to monitor
$folder = "$projectRoot\docs_all" 
$filter = '*.*'  # File types to monitor

$fsw = New-Object IO.FileSystemWatcher $folder, $filter -Property @{
    IncludeSubdirectories = $true  # Monitor subdirectories too
    NotifyFilter = [IO.NotifyFilters]'FileName, LastWrite'  # Monitor changes to filename and last write time
}

$logFile = "$PSScriptRoot\updater.log"

function Write-Log {
    param (
        [string]$message
    )
    Write-Output "$(Get-Date -Format yyyy/MM/dd)(PID:$PID) $message" >> $logfile
}


# Remove the log file if it exists
if (Test-Path $logFile) {
    Remove-Item $logFile
}

# Hashtable to store the last event time for each file
$lastEventTime = @{}

# Script to execute when a change is detected
$action = {
    $path = $Event.SourceEventArgs.FullPath
    $changeType = $Event.SourceEventArgs.ChangeType
    $logline = "$changeType, $path"

    # Get the current time
    $currentTime = Get-Date

    # Check if the file has been processed recently
    if ($lastEventTime.ContainsKey($path) -and ($currentTime - $lastEventTime[$path]).TotalSeconds -lt 0.6) {
        Write-Log "Skipping the file $path to copy as it was processed within 0.6 sec."
        return
    }

    # Update the last event time for the file
    $lastEventTime[$path] = $currentTime

    Write-Log $logline

    # Wait for a short period to ensure the file is ready for copying
    Start-Sleep -Milliseconds 500

    $destination = $path -creplace 'docs_all', '.docs'
    Copy-Item -Path $path -Destination $destination -Force
}

# Register the event
Register-ObjectEvent $fsw Changed -Action $action
Write-Log "Registered the monitoring event."


Try {
    # Prevent the script from exiting
    while ($true) {
        Start-Sleep 3

        # If the local server is not running, exit this script
        $connection = Test-NetConnection -ComputerName localhost -Port 3000
        if (!$connection.TcpTestSucceeded) {
            Write-Log "Local server is not running. Exiting the script."
            break
        }
    }
}
Finally {

    # Remove the event when Ctrl+C is pressed
    Write-Log "Unregister the monitoring event and terminate myself. GoodBye!"
    Remove-Job -Id $job.Id -Force
    exit
}