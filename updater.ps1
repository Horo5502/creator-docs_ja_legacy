# 監視するディレクトリのパス
$folder = "$PSScriptRoot\docs_all" 
$filter = '*.*'  # 監視するファイルの種類

$fsw = New-Object IO.FileSystemWatcher $folder, $filter -Property @{
    IncludeSubdirectories = $true  # サブディレクトリも監視する
    NotifyFilter = [IO.NotifyFilters]'FileName, LastWrite'  # ファイル名と最終書き込み時間の変更を監視する
}

# 変更を検出したときに実行するスクリプト
$action = {
    $path = $Event.SourceEventArgs.FullPath
    $changeType = $Event.SourceEventArgs.ChangeType
    $logline = "$(Get-Date), $changeType, $path"
    Write-Host $logline

    $destination = $path -creplace 'docs_all', '.docs'
    Copy-Item -Path $path -Destination $destination -Force
}

# イベントを登録する
Register-ObjectEvent $fsw Changed -Action $action
Write-Host "Registered the event."


Try {
    # スクリプトが終了しないようにする
    while ($true) { Start-Sleep 5 }
}
Finally {
    # Ctrl+Cが押されたときにイベントを削除する
    Remove-Job -Id $job.Id -Force
    Write-Host "Unregistered the event."
}