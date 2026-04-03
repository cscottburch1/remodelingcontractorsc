import { execSync } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';

const repoRoot = process.cwd();
const hooksDir = path.join(repoRoot, '.githooks');

try {
  execSync(`git config core.hooksPath "${hooksDir}"`, { stdio: 'inherit' });
  console.log(`Git hooks path configured: ${hooksDir}`);
  console.log('Pre-push checks are now active for this repo.');
} catch (error) {
  console.error('Failed to configure git hooks path.');
  process.exit(1);
}