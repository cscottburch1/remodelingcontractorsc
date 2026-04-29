# BUILD-FIX README

Run these commands from the project root to verify the alias fix with a clean build:

```powershell
Set-Location "d:\All Websites\remodelingcontractorsc.com\Remodelingcontractorsc.com"
if (Test-Path node_modules) { Remove-Item node_modules -Recurse -Force }
if (Test-Path .next) { Remove-Item .next -Recurse -Force }
npm ci
npm run build
```

Expected result: build completes with no "Module not found: Can't resolve '@/data/businessProfile'" error.
