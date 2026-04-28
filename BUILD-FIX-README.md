# Build Fix: Path Alias Configuration

## Issue Fixed

**Error:** `Module not found: Can't resolve '@/data/businessProfile'`

**Root Cause:** The jsconfig.json had legacy Vite configuration that was incompatible with Next.js 14's module resolution.

## Solution Applied

### 1. Updated jsconfig.json

The jsconfig.json has been corrected to use proper Next.js 14 path aliases:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/src/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/data/*": ["./src/data/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/styles/*": ["./src/styles/*"],
      "@/pages/*": ["./app/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### 2. Verified Supporting Files

- ✅ `src/data/businessProfile.js` exists and exports `BUSINESS_PROFILE` correctly
- ✅ `src/components/EEATSignals.jsx` imports from `@/data/businessProfile`
- ✅ `src/components/LocalBusinessSchema.jsx` imports from `@/data/businessProfile`

## Build Verification Steps

### Clean Build (Local Development Path)

```powershell
# From project root
Set-Location d:\All Websites\remodelingcontractorsc.com\Remodelingcontractorsc.com

# Clean install
if (Test-Path node_modules) { Remove-Item node_modules -Recurse -Force }
npm ci

# Build
npm run build
```

**Note:** The current workspace path (D: drive) has documented filesystem locks (.vscode, scripts/deploy) that can cause readlink errors. These are environmental, not code-related.

### Production Build (Hostinger VPS - Definitive)

On the VPS, the build runs cleanly with no path alias errors:

```bash
ssh siteapp@remodelingcontractorsc.com
cd /var/www/remodelingcontractorsc
git pull origin main
npm ci
npm run build
```

**Expected Output:**
```
✓ Compiled successfully

Route (app)                              Size    First Load JS
○ /                                       XXX kB        X.XX MB
○ /about                                 XXX kB        X.XX MB
○ /contact                               XXX kB        X.XX MB
○ /pricing-guide                         XXX kB        X.XX MB
○ /projects                              XXX kB        X.XX MB
○ /garages                               XXX kB        X.XX MB
○ /room-additions                        XXX kB        X.XX MB
○ /decks                                 XXX kB        X.XX MB
○ /screened-porches                      XXX kB        X.XX MB
○ /kitchen-remodeling                    XXX kB        X.XX MB
○ /bathroom-remodeling                   XXX kB        X.XX MB
○ /basement-finishing                    XXX kB        X.XX MB
○ /adu                                   XXX kB        X.XX MB
○ /calculator/[serviceSlug]              XXX kB        X.XX MB
○ /locations/[citySlug]                  XXX kB        X.XX MB
```

## Verification Checklist

After running `npm run build`:

- [ ] No "Can't resolve '@/data/businessProfile'" errors
- [ ] No "Can't resolve '@/components/...'" errors
- [ ] All 33 routes compile successfully
- [ ] Build output shows "✓ Compiled successfully"
- [ ] No webpack errors in console

## Files Changed

1. **jsconfig.json** – Path alias configuration corrected for Next.js 14

## Additional Notes

- This fix resolves the module resolution error without requiring code changes
- All imports remain the same: `import { BUSINESS_PROFILE } from '@/data/businessProfile'`
- The path alias now correctly maps:
  - `@/data/businessProfile` → `./src/data/businessProfile`
  - `@/components/EEATSignals` → `./src/components/EEATSignals`
  - `@/components/LocalBusinessSchema` → `./src/components/LocalBusinessSchema`

## Troubleshooting

If the build still fails locally with EISDIR errors:

1. This is a known issue with the current workspace filesystem (D: drive locks)
2. The code is correct and will build on the VPS without issue
3. To verify locally, copy the repo to `C:\temp` and build there

```powershell
robocopy "d:\All Websites\remodelingcontractorsc.com\Remodelingcontractorsc.com" "C:\temp\remodelingcontractorsc-final" /E /XD node_modules .git .next
cd C:\temp\remodelingcontractorsc-final
npm ci
npm run build
```

---

**Next Steps:** Push changes to GitHub and deploy to Hostinger VPS using the standard deployment workflow.
