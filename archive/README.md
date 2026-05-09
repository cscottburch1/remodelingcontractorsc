# Archive

This folder contains legacy documentation and backup files that have been retained for historical reference but are no longer part of the active codebase.

## Contents

### Legacy Documentation (moved 2026-05-09)
- `ADMIN_README.md` - Administrative setup notes (superseded by deployment automation)
- `DEPLOYMENT_GUIDE.md` - Manual deployment steps (now handled via GitHub Actions)
- `BUILD-FIX-README.md` - Build issues from development (all resolved)
- `FINAL-READY-README.md` - Release readiness checklist (archived after validation)
- `COMPLETE-IMPLEMENTATION-README.md` - Feature implementation notes (all features live)
- `FINAL-REVIEW-SNIPPETS-VALIDATION-README.md` - Code review docs (all validated)
- `GITHUB_AUTODEPLOY_SETUP.md` - Auto-deploy setup notes (fully implemented in Actions)
- `GEO_IMPROVEMENTS_README.md` - Geo-targeting planning (features integrated into codebase)

### Backup Files (moved 2026-05-09)
- `app/about/page.jsx.backup` - Previous version of about page
- `src/components/ServicePageContent.jsx.backup` - Previous version of service page component

## Deprecation Notes

**Why these files were archived:**
1. Deployment is now fully automated via GitHub Actions with environment detection
2. Build issues were resolved by creating portable build wrapper (`scripts/build-next.mjs`)
3. Calculator unification and pricing config consolidation simplified all documentation
4. Geo-targeting features are now integrated into location page templates and navigation

**Active Reference Documentation:**
- `AGENTS.md` - Deployment safety rules (active)
- `SITE_STRUCTURE.md` - Current site architecture (active)
- `DEPLOYMENT_GUIDE.md` (in active workflows) - Managed by Actions

## Accessing Archived Content

If you need to reference any archived documentation:
1. Check Git history for the specific file: `git log --all --full-history -- archive/FILENAME`
2. View historical versions: `git show HEAD~N:archive/FILENAME`

## Future Archival

When making significant architectural changes or completing major phases:
- Move README files documenting past iterations to this folder
- Keep backup `.backup` files for one full release cycle, then archive
- Document deprecation dates in this file

---
**Last Updated:** 2026-05-09
