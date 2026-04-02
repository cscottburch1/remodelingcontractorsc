#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR"

node scripts/deploy/guard-site.mjs

echo "Deploy policy validated for remodelingcontractorsc."
echo "Use your CI/CD or server workflow to build and restart PM2 process: remodelingcontractorsc"