import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, '../src/assets/images/screen-porch-hero.png');
const dest = join(__dirname, '../src/assets/images/screen-porch-hero.webp');

const info = await sharp(src)
  .webp({ quality: 82, effort: 4 })
  .toFile(dest);

console.log(`WebP written: ${dest}`);
console.log(`Size: ${(info.size / 1024).toFixed(1)} kB  (${info.width}×${info.height})`);
