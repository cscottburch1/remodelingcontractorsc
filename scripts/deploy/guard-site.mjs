import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const repoRoot = process.cwd();
const envArg = process.argv.find((arg) => arg.startsWith('--env='));
const deployEnv = (envArg ? envArg.split('=')[1] : 'production').toLowerCase();

const profiles = {
  production: {
    configFile: 'site.config.json',
    required: {
      Domain: 'remodelingcontractorsc.com',
      WwwDomain: 'www.remodelingcontractorsc.com',
      AppSlug: 'remodelingcontractorsc',
      AppUser: 'siteapp',
      AppPort: 3002,
      AppPath: '/var/www/remodelingcontractorsc',
      PM2Process: 'remodelingcontractorsc',
      RepoUrl: 'git@github.com:cscottburch1/remodelingcontractorsc.git',
      AllowedGitRepo: 'git@github.com:cscottburch1/remodelingcontractorsc.git'
    }
  },
  staging: {
    configFile: 'site.staging.config.json',
    required: {
      Domain: 'staging.remodelingcontractorsc.com',
      WwwDomain: 'www.staging.remodelingcontractorsc.com',
      AppSlug: 'remodelingcontractorsc-staging',
      AppUser: 'siteapp',
      AppPort: 3012,
      AppPath: '/var/www/remodelingcontractorsc-staging',
      PM2Process: 'remodelingcontractorsc-staging',
      RepoUrl: 'git@github.com:cscottburch1/remodelingcontractorsc.git',
      AllowedGitRepo: 'git@github.com:cscottburch1/remodelingcontractorsc.git'
    }
  }
};

if (!profiles[deployEnv]) {
  console.error(`Invalid deploy environment "${deployEnv}". Use production or staging.`);
  process.exit(1);
}

const profile = profiles[deployEnv];
const configPath = path.join(repoRoot, 'deploy', profile.configFile);

if (!fs.existsSync(configPath)) {
  console.error(`Missing deploy/${profile.configFile}`);
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const required = profile.required;

const blockedPatterns = config.BlockedPatterns || ['burchcontracting', 'burchcontracting.com'];
const blockedRegex = new RegExp(blockedPatterns.map((pattern) => pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'i');

for (const [key, expected] of Object.entries(required)) {
  if (config[key] !== expected) {
    console.error(`Invalid ${key}. Expected "${expected}" but found "${config[key]}".`);
    process.exit(1);
  }
}

const stringsToScan = [
  config.Domain,
  config.WwwDomain,
  config.AppSlug,
  config.AppPath,
  config.PM2Process,
  config.RepoUrl,
  config.AllowedGitRepo
];

if (stringsToScan.some((entry) => blockedRegex.test(String(entry)))) {
  console.error('Blocked burchcontracting identifier found in deployment values.');
  process.exit(1);
}

if (config.AllowedGitRepo !== required.AllowedGitRepo) {
  console.error('Deployment guard failed: repo remote is not explicitly allowed.');
  process.exit(1);
}

if (config.RepoUrl !== required.RepoUrl) {
  console.error('Deployment guard failed: RepoUrl is not explicitly allowed.');
  process.exit(1);
}

console.log(`Deployment guard passed for remodelingcontractorsc (${deployEnv}).`);