import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = './public/images';
const outputDir = './public/images';

const filesToOptimize = [
  { name: 'signage-storefront-1.jpg', maxWidth: 1200, quality: 80 },
  { name: 'signage-storefront-2.jpg', maxWidth: 1200, quality: 80 },
  { name: 'signage-storefront-3.jpg', maxWidth: 1200, quality: 80 },
  { name: 'signage-storefront-4.jpg', maxWidth: 1200, quality: 80 },
  { name: 'signage-storefront-5.jpg', maxWidth: 1200, quality: 80 },
  { name: 'vorher.jpg', maxWidth: 1200, quality: 80 },
  { name: 'arbeitsplatz.png', maxWidth: 1400, quality: 85 },
  { name: 'signage-storefront-6.png', maxWidth: 600, quality: 85 },
  { name: 'signage-storefront-7.png', maxWidth: 600, quality: 85 },
  { name: 'signage-storefront-8.png', maxWidth: 600, quality: 85 },
  { name: 'signage-storefront-9.png', maxWidth: 600, quality: 85 },
];

async function optimizeImage(file) {
  const inputPath = path.join(imagesDir, file.name);
  const ext = path.extname(file.name).toLowerCase();
  const baseName = path.basename(file.name, ext);

  // Create backup
  const backupPath = path.join(imagesDir, `${baseName}_original${ext}`);
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(inputPath, backupPath);
    console.log(`Backup created: ${backupPath}`);
  }

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  console.log(`Processing ${file.name} (${metadata.width}x${metadata.height})...`);

  let pipeline = image.resize(file.maxWidth, null, {
    withoutEnlargement: true,
    fit: 'inside'
  });

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: file.quality, mozjpeg: true });
  } else if (ext === '.png') {
    pipeline = pipeline.png({ quality: file.quality, compressionLevel: 9 });
  }

  const outputPath = path.join(outputDir, file.name);
  await pipeline.toFile(outputPath + '.tmp');

  // Replace original with optimized
  fs.unlinkSync(outputPath);
  fs.renameSync(outputPath + '.tmp', outputPath);

  const newSize = fs.statSync(outputPath).size;
  console.log(`  -> Optimized: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
}

async function main() {
  console.log('Starting image optimization...\n');

  for (const file of filesToOptimize) {
    try {
      await optimizeImage(file);
    } catch (err) {
      console.error(`Error optimizing ${file.name}:`, err.message);
    }
  }

  console.log('\nDone! Original images backed up with _original suffix.');
}

main();
