import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const src = join(root, 'src/assets/images/adu-cottage-light-gray.webp');
const out = join(root, 'src/assets/images/responsive');

const meta = await sharp(src).metadata();
console.log(`Original: ${meta.width}x${meta.height}`);

const jobs = [
  { file: 'hero-adu-640.webp',  width: 640,  fmt: 'webp', opts: { quality: 82 } },
  { file: 'hero-adu-960.webp',  width: 960,  fmt: 'webp', opts: { quality: 82 } },
  { file: 'hero-adu-320.avif',  width: 320,  fmt: 'avif', opts: { quality: 60 } },
  { file: 'hero-adu-640.avif',  width: 640,  fmt: 'avif', opts: { quality: 60 } },
  { file: 'hero-adu-960.avif',  width: 960,  fmt: 'avif', opts: { quality: 60 } },
  { file: 'hero-adu-1200.avif', width: 1200, fmt: 'avif', opts: { quality: 60 } },
];

await Promise.all(jobs.map(async j => {
  const info = await sharp(src)
    .resize({ width: j.width, withoutEnlargement: true })
    [j.fmt](j.opts)
    .toFile(join(out, j.file));
  console.log(`${j.file}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)}KB`);
}));

console.log('Done');
