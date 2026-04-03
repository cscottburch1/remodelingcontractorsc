const fs = require('node:fs');
const path = require('node:path');

const deployEnv = (process.env.DEPLOY_ENV || 'production').toLowerCase();
const configFile = deployEnv === 'staging' ? 'site.staging.config.json' : 'site.config.json';
const configPath = path.join(__dirname, 'deploy', configFile);
const cfg = JSON.parse(fs.readFileSync(configPath, 'utf8'));

module.exports = {
  apps: [
    {
      name: cfg.PM2Process,
      script: 'npm',
      args: 'run start',
      cwd: cfg.AppPath,
      env: {
        NODE_ENV: 'production',
        PORT: String(cfg.AppPort)
      }
    }
  ]
};