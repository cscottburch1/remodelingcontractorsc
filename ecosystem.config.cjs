const fs = require('node:fs');
const path = require('node:path');

const configPath = path.join(__dirname, 'deploy', 'site.config.json');
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