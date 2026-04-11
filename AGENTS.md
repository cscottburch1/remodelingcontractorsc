# Deployment and Infrastructure Safety Rules

This repository is allowed to deploy to the isolated Hostinger VPS environment for:

* Domain: remodelingcontractorsc.com
* WWW Domain: [www.remodelingcontractorsc.com](http://www.remodelingcontractorsc.com)
* AppSlug: remodelingcontractorsc
* AppPath: /var/www/remodelingcontractorsc
* PM2 Process: remodelingcontractorsc
* Allowed Repo: [git@github.com](mailto:git@github.com):cscottburch1/remodelingcontractorsc.git

## Allowed Actions

The agent IS allowed to:

* SSH into the VPS for this project
* inspect the app directory for this project
* run git pull for this project
* run npm install and npm run build for this project
* restart or inspect the PM2 process for this project
* inspect and modify the dedicated nginx config for remodelingcontractorsc.com only
* run validation checks for this project
* inspect logs for this project
* troubleshoot 403, nginx, PM2, build, permissions, and deployment issues for this project
* verify DNS, SSL, and reverse proxy behavior for remodelingcontractorsc.com only

## Forbidden Actions

The agent MUST NOT:

* access, modify, deploy, restart, or troubleshoot burchcontracting.com
* access, modify, deploy, restart, or troubleshoot any PM2 process for burchcontracting.com
* edit or reload any nginx config for burchcontracting.com
* pull, build, or deploy any burchcontracting repository
* modify shared infrastructure in a way that could affect burchcontracting.com
* change server-wide defaults unless strictly required for remodelingcontractorsc.com and confirmed safe
* touch any unrelated app directory outside /var/www/remodelingcontractorsc

## Isolation Rules

All deployment and troubleshooting actions must stay within these boundaries:

* App directory: /var/www/remodelingcontractorsc
* PM2 process: remodelingcontractorsc
* Domain config: remodelingcontractorsc.com and [www.remodelingcontractorsc.com](http://www.remodelingcontractorsc.com)
* Repository: [git@github.com](mailto:git@github.com):cscottburch1/remodelingcontractorsc.git

If the agent encounters any config, process, file path, or domain that appears to belong to burchcontracting.com, it must stop and avoid modifying it.

## Deployment Workflow for This Repo

For remodelingcontractorsc.com, the agent is allowed to execute this workflow:

1. SSH into the VPS
2. cd /var/www/remodelingcontractorsc
3. git pull origin main
4. npm install
5. npm run build
6. pm2 restart remodelingcontractorsc
7. verify pm2 status
8. inspect logs
9. inspect nginx site config for remodelingcontractorsc.com only
10. reload nginx only if the remodelingcontractorsc.com config changed and validation passes
11. verify live response and app health

## Safety Requirement

Before making any deployment or server change, the agent must confirm that:

* the target app path is /var/www/remodelingcontractorsc
* the target PM2 process is remodelingcontractorsc
* the target domain is remodelingcontractorsc.com
* no burchcontracting.com resource is being touched
