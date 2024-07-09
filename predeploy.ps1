param (
    [switch]$logging = $false
)

# 与えられたパスを構成するディレクトリが存在しない場合に作成
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

# JSONデータを解析してコピー操作を実行
function CopyFilesFromJson {
    param (
        [string]$path,
        [PSCustomObject]$data
    )

    foreach ($key in $data.PSObject.Properties.Name) {
        $value = $data.$key
        $newPath = Join-Path -Path $path -ChildPath $key


        if ($value -is [PSCustomObject]) {
            # 再帰的にディレクトリを探索
            CopyFilesFromJson -path $newPath -data $value
        }

        elseif ($value -is [System.Collections.ArrayList] -or $value -is [System.Object[]]) {
            # リスト内にはハッシュテーブルも含まれている可能性があるので、ファイル名文字列のみを抽出
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
                    # 再帰的にディレクトリを探索
                    CopyFilesFromJson -path $newPath -data $v
                }
            }
        }
    }
}

if (Test-Path "$PSScriptRoot\.docs") {
    Remove-Item -Path "$PSScriptRoot\.docs" -Recurse -Force
    if ($logging -eq $true) {
        Write-Host -ForegroundColor Green ".docs directory initialized"
    }
    New-Item -ItemType Directory -Force -Path "$PSScriptRoot\.docs" | Out-Null
    Set-ItemProperty -Path "$PSScriptRoot\.docs" -Name "Attributes" -Value ([System.IO.FileAttributes]::Hidden)
    if ($logging -eq $true) {
        Write-Host -ForegroundColor Green ".docs directory made & hidden"
    }
}

# copy-target.ymlを読み込んで、ファイルをコピー
$jsonData = ConvertFrom-Json ((Get-Content (Join-Path $PSScriptRoot "deploy-target.json")) -join "`n")
if ($logging -eq $true) {
    Write-Host -ForegroundColor Green "Copy markdown files"
}
CopyFilesFromJson -path "$PSScriptRoot" -data $jsonData