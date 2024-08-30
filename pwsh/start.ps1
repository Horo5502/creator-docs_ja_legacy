$updaterPath = "$PSScriptRoot\updater.ps1"
$logfilePath = "$PSScriptRoot\updater.log"
$pidfilePath = "$PSScriptRoot\updaterPID.txt"

Start-Process -FilePath 'powershell' -ArgumentList '-File', $updaterPath -WindowStyle Hidden -PassThru | Select-Object -ExpandProperty Id > $pidfilePath

try {
    docusaurus start
}
finally {
    # This block may not work as expected i dont know why
    Get-Content updaterPID.txt | ForEach-Object {
        Stop-Process -Id $_ -Force
        Write-Output "ID $_ is terminated." >> $logfilePath
    }
}