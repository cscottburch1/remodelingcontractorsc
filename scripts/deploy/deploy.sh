#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR"

DEPLOY_ENV="${1:-production}"
if [[ "$DEPLOY_ENV" != "production" && "$DEPLOY_ENV" != "staging" ]]; then
	echo "Invalid environment: $DEPLOY_ENV"
	echo "Usage: ./scripts/deploy/deploy.sh [production|staging]"
	exit 1
fi

node scripts/deploy/guard-site.mjs --env="$DEPLOY_ENV"

if [[ "$DEPLOY_ENV" == "staging" ]]; then
	PM2_PROCESS="remodelingcontractorsc-staging"
else
	PM2_PROCESS="remodelingcontractorsc"
fi

echo "Deploy policy validated for remodelingcontractorsc ($DEPLOY_ENV)."
echo "Use your CI/CD or server workflow to build and restart PM2 process: $PM2_PROCESS"