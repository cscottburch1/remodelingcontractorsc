# Deployment Workflow

Use this repo with two deployment lanes:

1. Production lane
- Branch: `main`
- Config: `deploy/site.config.json`
- Guard: `npm run deploy:guard`
- PM2 process: `remodelingcontractorsc`

2. Staging lane
- Branch: feature branch or `staging`
- Config: `deploy/site.staging.config.json`
- Guard: `npm run deploy:guard:staging`
- PM2 process: `remodelingcontractorsc-staging`

## Guard commands

```bash
npm run deploy:guard
npm run deploy:guard:staging
```

## Deploy script

```bash
./scripts/deploy/deploy.sh production
./scripts/deploy/deploy.sh staging
```

## PM2 startup examples

```bash
pm2 start ecosystem.config.cjs
DEPLOY_ENV=staging pm2 start ecosystem.config.cjs
```

The `DEPLOY_ENV=staging` variable selects `deploy/site.staging.config.json` and keeps production values isolated.

## Pre-push automation

Enable local hook automation once per clone:

```bash
npm run hooks:install
```

After that, every `git push` runs:

```bash
npm run verify:push
```

This blocks push when deployment guards or build fail.