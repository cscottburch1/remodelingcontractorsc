import { execSync } from 'node:child_process';
import process from 'node:process';

const commands = [
  'npm run deploy:guard',
  'npm run deploy:guard:staging',
  'npm run build'
];

try {
  for (const command of commands) {
    console.log(`\n> ${command}`);
    execSync(command, { stdio: 'inherit' });
  }

  console.log('\nverify:push passed.');
} catch (error) {
  console.error('\nverify:push failed. Push aborted.');
  process.exit(1);
}