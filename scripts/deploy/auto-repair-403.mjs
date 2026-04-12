#!/usr/bin/env node
import { execSync } from 'node:child_process';

const WATCH_MODE = process.argv.includes('--watch');
const RUN_ONCE = process.argv.includes('--once') || !WATCH_MODE;

const SITE_URL = process.env.SITE_URL || 'https://remodelingcontractorsc.com';
const PUBLIC_PATH = process.env.AUTO_REPAIR_PUBLIC_PATH || '/projects';
const ORIGIN_HEALTH_URL = process.env.AUTO_REPAIR_ORIGIN_URL || 'http://127.0.0.1:3002/health';
const PM2_PROCESS = process.env.AUTO_REPAIR_PM2_PROCESS || 'remodelingcontractorsc';
const CHECK_INTERVAL_MS = Number(process.env.AUTO_REPAIR_INTERVAL_MS || 120000);
const REQUEST_TIMEOUT_MS = Number(process.env.AUTO_REPAIR_TIMEOUT_MS || 8000);
const ENABLE_CLOUDFLARE_PURGE = String(process.env.AUTO_REPAIR_CF_PURGE || 'false').toLowerCase() === 'true';
const CLOUDFLARE_ZONE_ID = process.env.CLOUDFLARE_ZONE_ID || '';
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN || '';

const publicUrl = new URL(PUBLIC_PATH, SITE_URL).toString();

function now() {
  return new Date().toISOString();
}

function log(msg) {
  console.log(`[403-healer] ${now()} ${msg}`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function checkUrl(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'manual',
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
    });

    return {
      ok: response.ok,
      status: response.status,
      server: response.headers.get('server') || 'unknown',
      cfRay: response.headers.get('cf-ray') || ''
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      server: 'unreachable',
      cfRay: '',
      error: error instanceof Error ? error.message : String(error)
    };
  }
}

function runCommand(command) {
  try {
    const output = execSync(command, { stdio: 'pipe', encoding: 'utf8' });
    return { ok: true, output: output.trim() };
  } catch (error) {
    const stderr = error && typeof error === 'object' && 'stderr' in error ? String(error.stderr || '').trim() : '';
    const stdout = error && typeof error === 'object' && 'stdout' in error ? String(error.stdout || '').trim() : '';
    return { ok: false, output: stderr || stdout || String(error) };
  }
}

async function purgeCloudflareCache() {
  if (!ENABLE_CLOUDFLARE_PURGE) {
    return { ok: false, skipped: true, reason: 'AUTO_REPAIR_CF_PURGE is disabled' };
  }

  if (!CLOUDFLARE_ZONE_ID || !CLOUDFLARE_API_TOKEN) {
    return { ok: false, skipped: true, reason: 'Missing CLOUDFLARE_ZONE_ID or CLOUDFLARE_API_TOKEN' };
  }

  try {
    const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/purge_cache`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ purge_everything: true }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
    });

    const data = await response.json();
    if (!response.ok || !data.success) {
      return { ok: false, skipped: false, reason: `Cloudflare API error: ${JSON.stringify(data.errors || data)}` };
    }

    return { ok: true, skipped: false, reason: 'Cloudflare cache purged' };
  } catch (error) {
    return {
      ok: false,
      skipped: false,
      reason: error instanceof Error ? error.message : String(error)
    };
  }
}

async function repairOrigin() {
  log(`Attempting origin repair for PM2 process '${PM2_PROCESS}'`);

  const restart = runCommand(`pm2 restart ${PM2_PROCESS}`);
  if (!restart.ok) {
    log(`pm2 restart failed: ${restart.output}`);
  }

  await sleep(3000);
  let origin = await checkUrl(ORIGIN_HEALTH_URL);
  if (origin.ok && origin.status === 200) {
    log('Origin recovered after PM2 restart');
    return true;
  }

  log('Origin still unhealthy; running build and second restart');
  const build = runCommand('npm run build');
  if (!build.ok) {
    log(`Build failed during repair: ${build.output}`);
  }

  const secondRestart = runCommand(`pm2 restart ${PM2_PROCESS}`);
  if (!secondRestart.ok) {
    log(`Second PM2 restart failed: ${secondRestart.output}`);
  }

  await sleep(3000);
  origin = await checkUrl(ORIGIN_HEALTH_URL);
  if (origin.ok && origin.status === 200) {
    log('Origin recovered after build + restart');
    return true;
  }

  log(`Origin remains unhealthy (status=${origin.status}, error=${origin.error || 'n/a'})`);
  return false;
}

async function runCycle() {
  const publicCheck = await checkUrl(publicUrl);
  const originCheck = await checkUrl(ORIGIN_HEALTH_URL);

  log(
    `Probe public=${publicCheck.status} (${publicCheck.server}) origin=${originCheck.status} (${originCheck.server}) path=${PUBLIC_PATH}`
  );

  if (publicCheck.status === 200 && originCheck.status === 200) {
    return;
  }

  if (originCheck.status !== 200) {
    await repairOrigin();
    return;
  }

  if (publicCheck.status === 403 && originCheck.status === 200) {
    log(`Detected edge 403 while origin is healthy${publicCheck.cfRay ? ` (cf-ray=${publicCheck.cfRay})` : ''}`);

    const purgeResult = await purgeCloudflareCache();
    if (purgeResult.ok) {
      log('Cloudflare cache purge completed');
      await sleep(3000);
      const recheck = await checkUrl(publicUrl);
      log(`Post-purge public status=${recheck.status}`);
      return;
    }

    log(`Edge 403 could not be auto-repaired at edge: ${purgeResult.reason}`);
    log('Origin is healthy. Likely Cloudflare security rule challenge/block; review Cloudflare Security Events for this cf-ray.');
    return;
  }

  if (publicCheck.status !== 200 && originCheck.status === 200) {
    log(`Public status is ${publicCheck.status} with healthy origin; attempting nginx reload`);
    const test = runCommand('nginx -t');
    if (!test.ok) {
      log(`nginx -t failed: ${test.output}`);
      return;
    }
    const reload = runCommand('nginx -s reload');
    if (!reload.ok) {
      log(`nginx reload failed: ${reload.output}`);
      return;
    }

    await sleep(2000);
    const recheck = await checkUrl(publicUrl);
    log(`Post-nginx-reload public status=${recheck.status}`);
  }
}

async function main() {
  log(`Starting 403 auto-repair (${WATCH_MODE ? 'watch mode' : 'single run'})`);
  log(`Public URL: ${publicUrl}`);
  log(`Origin URL: ${ORIGIN_HEALTH_URL}`);

  if (RUN_ONCE) {
    await runCycle();
    return;
  }

  while (true) {
    await runCycle();
    await sleep(CHECK_INTERVAL_MS);
  }
}

main().catch((error) => {
  log(`Fatal error: ${error instanceof Error ? error.stack || error.message : String(error)}`);
  process.exit(1);
});
