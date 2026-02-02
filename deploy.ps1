# Deploy script for signage.cockpit360.de
$ErrorActionPreference = "Stop"

# Load .env
Get-Content .env | ForEach-Object {
    if ($_ -match "^([^#][^=]+)=(.*)$") {
        Set-Item -Path "env:$($matches[1])" -Value $matches[2]
    }
}

Write-Host "Building Next.js..." -ForegroundColor Cyan
npm run build

Write-Host "Deploying to FTP..." -ForegroundColor Cyan

$files = Get-ChildItem -Path "out" -Recurse -File
foreach ($file in $files) {
    $relativePath = $file.FullName.Replace((Get-Location).Path + "\out\", "").Replace("\", "/")
    $ftpUrl = "ftp://$env:FTP_HOST$env:FTP_PATH/$relativePath"

    curl.exe --ftp-create-dirs -T $file.FullName $ftpUrl --user "$env:FTP_USER`:$env:FTP_PASS" -s
    Write-Host "  Uploaded: $relativePath" -ForegroundColor Green
}

Write-Host "Deploy complete!" -ForegroundColor Cyan
