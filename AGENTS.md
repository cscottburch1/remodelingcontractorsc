# AGENTS

This file defines mandatory rules for any AI agent or automation working in this repository.

## Mission

Build and maintain remodelingcontractorsc.com safely, with strict production isolation and predictable deploy behavior.

## Non-Negotiable Rules

1. Never access or modify VPS infrastructure directly from agent workflows.
2. Never edit NGINX, PM2 services, or deployment config outside this repository.
3. Never commit directly to `main` from autonomous agent workflows.
4. Never bypass deploy guards or pre-push checks.
5. Never introduce or restore `burchcontracting` identifiers in deployment values.

## Git Workflow

1. Create a feature branch for each task:
   - `feature/<short-task-name>`
2. Make focused commits with clear messages.
3. Open a pull request into `main`.
4. Merge only after checks pass and changes are reviewed.

## Required Validation Before PR

Run these commands locally:

```bash
npm run verify:push
```

This executes:

1. `npm run deploy:guard`
2. `npm run deploy:guard:staging`
3. `npm run build`

## Deployment Lanes

1. Production lane
   - Config: `deploy/site.config.json`
   - Guard: `npm run deploy:guard`
   - PM2 process: `remodelingcontractorsc`

2. Staging lane
   - Config: `deploy/site.staging.config.json`
   - Guard: `npm run deploy:guard:staging`
   - PM2 process: `remodelingcontractorsc-staging`

Use:

```bash
./scripts/deploy/deploy.sh production
./scripts/deploy/deploy.sh staging
```

## Agent Scope Guidance

1. Allowed
   - Frontend, backend, content, SEO, tests, and repository scripts.
2. Allowed
   - Propose infra changes as PR notes (do not execute infra changes).
3. Disallowed
   - Direct server shell actions, secret rotation, DNS changes, or manual production restart.

## Secrets and Safety

1. Do not commit secrets or credentials.
2. Use `.env` on deployment host; keep `.env.example` as template only.
3. Sanitize logs and outputs before committing artifacts.

## Human Approval Gates

Require human confirmation before:

1. Merging to `main`.
2. Running production deployment.
3. Changing domain, PM2 process name, app path, or app port.

## Source of Truth

When there is any conflict, follow these files:

1. `deploy/WORKFLOW.md`
2. `scripts/deploy/guard-site.mjs`
3. `deploy/site.config.json`
4. `deploy/site.staging.config.json`
