# Server deployment script for remodelingcontractorsc.com
$ErrorActionPreference = "Stop"

$password = "Breana3397@@"
$username = "siteapp"
$server = "remodelingcontractorsc.com"

Write-Host "Deploying to $server..." -ForegroundColor Cyan

# Create deployment commands
$commands = @"
cd /var/www/remodelingcontractorsc
git pull origin main
npm ci
npm run build
pm2 restart remodelingcontractorsc
pm2 status remodelingcontractorsc
"@

# Use plink if available, otherwise manual SSH
if (Get-Command plink -ErrorAction SilentlyContinue) {
    Write-Host "Using plink for automated deployment..."
    echo $password | plink -ssh -batch -pw $password ${username}@${server} $commands
} else {
    Write-Host "Please run these commands manually on the server:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "ssh ${username}@${server}" -ForegroundColor Green
    Write-Host $commands -ForegroundColor Green
    Write-Host ""
    Write-Host "Password: $password"
}
