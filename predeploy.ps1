#Requires -Modules powershell-yaml

# 与えられたパスを構成するディレクトリが存在しない場合に作成
function MakeDirectoryIfNotExists {
    param (
        [string]$dirpath
    )
    
    if (!(Test-Path $dirpath)) {
        Write-Host -NoNewline -ForegroundColor Green "MKDIR:   "
        Write-Host $dirpath
        New-Item -ItemType Directory -Force -Path $dirpath | Out-Null
    }
}

# YAMLデータを解析してコピー操作を実行
function CopyFilesFromYaml {
    param (
        [string]$path,
        [hashtable]$data
    )

    foreach ($key in $data.Keys) {
        $value = $data[$key]
        $newPath = Join-Path -Path $path -ChildPath $key


        if ($value -is [hashtable]) {
            # 再帰的にディレクトリを探索
            CopyFilesFromYaml -path $newPath -data $value
        }

        elseif ($value -is [System.Collections.Generic.List[System.Object]]) {
            # リスト内にはハッシュテーブルも含まれている可能性があるので、ファイル名文字列のみを抽出
            $stringvalue = $value | Where-Object { $_ -is [String]}

            foreach ($s in $stringvalue) {
                $source = Join-Path -Path $newPath -ChildPath "$s.md"
                $destinationDir = $newPath -creplace 'docs_all', 'docs'
                $destination = Join-Path -Path $destinationDir -ChildPath "$s.md"

                MakeDirectoryIfNotExists -dirpath $destinationDir

                Write-Host -NoNewline -ForegroundColor Green "COPY:    "
                Write-Host "source = $source,   destination = $destination"
                Copy-Item -Path $source -Destination $destination -Force
            }

            foreach ($v in $value) {
                if ($v -is [hashtable]) {
                    # 再帰的にディレクトリを探索
                    CopyFilesFromYaml -path $newPath -data $v
                }
            }
        }
    }
}


# copy-target.ymlを読み込んで、ファイルをコピー
$yamlData = ConvertFrom-Yaml ((Get-Content (Join-Path $PSScriptRoot "deploy-target.yml")) -join "`n")
Write-Host -ForegroundColor Green "Copy markdown files"
CopyFilesFromYaml -path "$PSScriptRoot" -data $yamlData