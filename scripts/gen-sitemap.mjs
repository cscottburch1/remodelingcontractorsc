import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const today = '2026-04-12';
const base = 'https://remodelingcontractorsc.com';

const staticPages = [
  { loc: '/',                       priority: '1.0', changefreq: 'weekly'  },
  { loc: '/about',                  priority: '0.7', changefreq: 'monthly' },
  { loc: '/services',               priority: '0.8', changefreq: 'monthly' },
  { loc: '/projects',               priority: '0.7', changefreq: 'monthly' },
  { loc: '/financing',              priority: '0.6', changefreq: 'monthly' },
  { loc: '/contact',                priority: '0.8', changefreq: 'monthly' },
  { loc: '/request-estimate',       priority: '0.8', changefreq: 'monthly' },
  { loc: '/upstate-sc-contractor',  priority: '0.8', changefreq: 'monthly' },
  { loc: '/service-areas',          priority: '0.8', changefreq: 'monthly' },
];

const coreServicePaths = [
  '/garages',
  '/additions',
  '/screened-porches',
  '/decks',
  '/adus',
  '/lake-cabin-screened-porches',
];

const towns = [
  'mauldin-sc',
  'simpsonville-sc',
  'fountain-inn-sc',
  'gray-court-sc',
  'laurens-sc',
  'woodruff-sc',
  'clinton-sc',
  'ora-sc',
  'joanna-sc',
  'greenwood-sc',
];

const servicePatterns = [
  'garage-builder',
  'home-addition-contractor',
  'screened-porch-builder',
  'deck-builder',
  'adu-builder',
  'lake-cabin-screened-porch-builder',
];

const projectPaths = [
  '/projects/detached-two-bay-garage-simpsonville-sc',
  '/projects/new-bedroom-suite-addition-fountain-inn-sc',
  '/projects/composite-deck-greenville-sc',
  '/projects/aluminum-screened-enclosure-fountain-inn-sc',
  '/projects/backyard-granny-pod-laurens-sc',
];

function entry(loc, priority, changefreq) {
  return [
    '  <url>',
    `    <loc>${base}${loc}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
];

// Static pages
staticPages.forEach(p => lines.push(entry(p.loc, p.priority, p.changefreq)));

// Core service pages
coreServicePaths.forEach(p => lines.push(entry(p, '0.9', 'monthly')));

// Town pages
towns.forEach(t => lines.push(entry(`/${t}`, '0.7', 'monthly')));

// Local service pages (6 services × 10 towns = 60 pages)
servicePatterns.forEach(svc =>
  towns.forEach(t => lines.push(entry(`/${svc}-${t}`, '0.6', 'monthly')))
);

// Project detail pages
projectPaths.forEach(p => lines.push(entry(p, '0.5', 'yearly')));

lines.push('</urlset>');

const xml = lines.join('\n') + '\n';
writeFileSync(join(root, 'public/sitemap.xml'), xml, 'utf8');

const urlCount = staticPages.length + coreServicePaths.length + towns.length
  + (servicePatterns.length * towns.length) + projectPaths.length;
console.log(`Done — ${urlCount} URLs written to public/sitemap.xml`);
