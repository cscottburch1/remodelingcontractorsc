import { spawnSync } from 'node:child_process';

const env = { ...process.env };

// This patch is only needed on Windows Node runtimes that surface EISDIR on readlink.
if (process.platform === 'win32') {
  const existingNodeOptions = env.NODE_OPTIONS ? `${env.NODE_OPTIONS} ` : '';
  env.NODE_OPTIONS = `${existingNodeOptions}--import=./readlink-patch.mjs`;
}

const result = spawnSync(
  process.execPath,
  ['./node_modules/next/dist/bin/next', 'build'],
  {
    stdio: 'inherit',
    env,
  }
);

if (typeof result.status === 'number') {
  process.exit(result.status);
}

process.exit(1);
