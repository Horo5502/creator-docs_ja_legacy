# Description: This script is used to copy markdown files from the docs_all directory to the .docs directory when `npm start` is executed.

param (
    [switch]$logging = $false
)

$projectRoot = [System.Environment]::GetEnvironmentVariable('PROJECT_ROOT')
$dotdocsPath = "$projectRoot\.docs"
$deployTargetPath = "$PSScriptRoot\deploy-target.json"

# Creates the directory that make up the given path if it does not exist
function MakeDirectoryIfNotExists {
    param (
        [string]$dirpath
    )
    
    if (!(Test-Path $dirpath)) {
        if ($logging -eq $true) {
            Write-Host -NoNewline -ForegroundColor Green "MKDIR:   "
            Write-Host $dirpath
        }
        New-Item -ItemType Directory -Force -Path $dirpath | Out-Null
    }
}

# Parse the JSON data and perform the copy operation
function CopyFilesFromJson {
    param (
        [string]$path,
        [PSCustomObject]$data
    )

    foreach ($key in $data.PSObject.Properties.Name) {
        $value = $data.$key
        $newPath = Join-Path -Path $path -ChildPath $key


        if ($value -is [PSCustomObject]) {
            # Recursively search directory
            CopyFilesFromJson -path $newPath -data $value
        }

        elseif ($value -is [System.Collections.ArrayList] -or $value -is [System.Object[]]) {
            # The list may also contain hash tables, so extract only the file name strings
            $stringvalue = $value | Where-Object { $_ -is [String]}

            foreach ($s in $stringvalue) {
                $source = Join-Path -Path $newPath -ChildPath "$s.md"
                $destinationDir = $newPath -creplace 'docs_all', '.docs'
                $destination = Join-Path -Path $destinationDir -ChildPath "$s.md"

                MakeDirectoryIfNotExists -dirpath $destinationDir

                if ($logging -eq $true) {
                    Write-Host -NoNewline -ForegroundColor Green "COPY:    "
                    Write-Host "source = $source,   destination = $destination"
                }
                Copy-Item -Path $source -Destination $destination -Force
            }

            foreach ($v in $value) {
                if ($v -is [PSCustomObject]) {
                    # Recursively search directory
                    CopyFilesFromJson -path $newPath -data $v
                }
            }
        }
    }
}

if (Test-Path "$dotdocsPath") {
    Remove-Item -Path "$dotdocsPath" -Recurse -Force
    if ($logging -eq $true) {
        Write-Host -ForegroundColor Green ".docs directory initialized"
    }
    New-Item -ItemType Directory -Force -Path "$dotdocsPath" | Out-Null
    Set-ItemProperty -Path "$dotdocsPath" -Name "Attributes" -Value ([System.IO.FileAttributes]::Hidden)
    if ($logging -eq $true) {
        Write-Host -ForegroundColor Green ".docs directory made & hidden"
    }
}

# Read copy-target.yml and copy the files
$jsonData = ConvertFrom-Json ((Get-Content $deployTargetPath) -join "`n")
if ($logging -eq $true) {
    Write-Host -ForegroundColor Green "Copy markdown files"
}
CopyFilesFromJson -path "$projectRoot" -data $jsonData