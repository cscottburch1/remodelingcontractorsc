# Restart Session Checkpoint

This workspace is configured and ready after VS Code restart.

## What Is Already Persisted
- Playwright MCP installed as dev dependency.
- Standard MCP script in package.json.
- Hardened MCP script in package.json.
- MCP server definitions in .vscode/mcp.json.
- Deployment isolation guard remains active for remodelingcontractorsc only.

## Resume Commands
Run from workspace root:

- Start site dev preview:
  npm run dev

- Playwright MCP (standard):
  npm run mcp:playwright

- Playwright MCP (hardened):
  npm run mcp:playwright:secure

## Quick Validation
- Build check:
  npm run build

- Deployment guard check:
  node scripts/deploy/guard-site.mjs
