## Summary

Describe what changed and why.

## Scope

- [ ] Frontend
- [ ] Backend
- [ ] Content/SEO
- [ ] Deployment scripts/config
- [ ] Tests

## Safety Rules Check

- [ ] No direct infrastructure changes outside this repo
- [ ] No secrets or credentials committed
- [ ] No blocked identifiers added (burchcontracting / burchcontracting.com)
- [ ] Work done on a feature branch (not direct autonomous commits to main)

## Validation

Paste output or summarize results from:

```bash
npm run verify:push
```

- [ ] `npm run deploy:guard` passed
- [ ] `npm run deploy:guard:staging` passed
- [ ] `npm run build` passed

## Deployment Impact

- [ ] No deployment-impacting changes
- [ ] Production lane affected (`deploy/site.config.json`)
- [ ] Staging lane affected (`deploy/site.staging.config.json`)
- [ ] PM2 process/app path/port/domain changed

If any box above is checked, explain exactly what changed and why:

## Staging Test Notes

List pages/routes tested and any screenshots or logs.

## Reviewer Notes

Anything reviewers should verify before merge.