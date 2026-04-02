import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');

const app = express();
const port = Number(process.env.PORT || 3002);

const allowedProjectTypes = new Set([
  'Garage Builders',
  'Room Additions',
  'Deck Builders',
  'Aluminum Screened Enclosures',
  'Granny Pods',
  'Detached Garages',
  'Attached Garages',
  'Garage With Apartment / Storage Above',
  'Second Story Additions',
  'Bump-Out Additions',
  'Covered Decks',
  'Composite Decks',
  'Screened Patio Enclosures',
  'Screen Rooms',
  'Backyard Granny Pods',
  'Detached Guest Houses / ADU-Style Options'
]);

app.set('trust proxy', 1);
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: false, limit: '100kb' }));

const leadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 6,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    error: 'Too many requests. Please wait and try again.'
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeText(input, maxLen) {
  return String(input || '')
    .replace(/\0/g, '')
    .trim()
    .slice(0, maxLen);
}

function validateLead(body) {
  const name = sanitizeText(body.name, 100);
  const email = sanitizeText(body.email, 160);
  const phone = sanitizeText(body.phone, 40);
  const projectType = sanitizeText(body.projectType, 80);
  const details = sanitizeText(body.details, 3000);
  const website = sanitizeText(body.website, 120);
  const startedAt = Number(body.startedAt || 0);

  if (website) {
    return { ok: true, isBot: true };
  }

  if (!Number.isFinite(startedAt) || startedAt <= 0 || Date.now() - startedAt < 2500) {
    return { ok: false, error: 'Request rejected.' };
  }

  if (!name || name.length < 2) {
    return { ok: false, error: 'Please enter your name.' };
  }

  if (!isValidEmail(email)) {
    return { ok: false, error: 'Please enter a valid email.' };
  }

  if (!allowedProjectTypes.has(projectType)) {
    return { ok: false, error: 'Please select a valid project type.' };
  }

  return {
    ok: true,
    isBot: false,
    lead: {
      name,
      email,
      phone,
      projectType,
      details
    }
  };
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true';

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: smtpPort,
    secure,
    auth: {
      user,
      pass
    }
  });
}

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/lead', leadLimiter, async (req, res) => {
  const checked = validateLead(req.body || {});

  if (!checked.ok) {
    return res.status(400).json({ ok: false, error: checked.error });
  }

  if (checked.isBot) {
    return res.json({ ok: true });
  }

  const transporter = getTransporter();
  if (!transporter) {
    return res.status(500).json({ ok: false, error: 'Email service is not configured.' });
  }

  const lead = checked.lead;
  const recipient = 'estimates@remodelingcontractorsc.com';
  const fromEmail = process.env.LEAD_FROM_EMAIL || process.env.SMTP_USER;

  const textBody = [
    'New estimate request',
    '',
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || 'Not provided'}`,
    `Project Type: ${lead.projectType}`,
    '',
    'Project Details:',
    lead.details || 'No details provided'
  ].join('\n');

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: recipient,
      replyTo: lead.email,
      subject: `New Estimate Request - ${lead.projectType}`,
      text: textBody
    });

    return res.json({ ok: true });
  } catch (error) {
    return res.status(502).json({ ok: false, error: 'Unable to send email right now.' });
  }
});

if (fs.existsSync(path.join(publicDir, 'robots.txt'))) {
  app.get('/robots.txt', (_req, res) => {
    res.sendFile(path.join(publicDir, 'robots.txt'));
  });
}

if (fs.existsSync(path.join(publicDir, 'sitemap.xml'))) {
  app.get('/sitemap.xml', (_req, res) => {
    res.sendFile(path.join(publicDir, 'sitemap.xml'));
  });
}

app.use(express.static(distDir, { index: false }));

app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});