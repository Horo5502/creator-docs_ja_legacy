Start-Process -FilePath 'powershell' -ArgumentList '-File', './updater.ps1' -WindowStyle Hidden -PassThru | Select-Object -ExpandProperty Id > updaterPID.txt

try {
    docusaurus start
}
finally {
    Get-Content updaterPID.txt | ForEach-Object { Stop-Process -Id $_ -Force }
}