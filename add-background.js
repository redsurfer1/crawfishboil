import sharp from 'sharp';
import { readFileSync } from 'fs';

// Red-50 color (#fef2f2 = rgb(254, 242, 242))
const RED_50_RGB = { r: 254, g: 242, b: 242 };

async function addRedBackground(inputPath, outputPath) {
  try {
    // Read the input image
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`Processing image: ${metadata.width}x${metadata.height}`);

    // Create a red-50 background
    const background = sharp({
      create: {
        width: metadata.width,
        height: metadata.height,
        channels: 4,
        background: RED_50_RGB
      }
    });

    // Composite the original image on top of the red background
    const result = await background
      .composite([{ input: inputPath }])
      .png()
      .toFile(outputPath);

    console.log(`✓ Saved to: ${outputPath}`);
    console.log(`  Size: ${result.width}x${result.height}`);
    console.log(`  Format: ${result.format}`);

  } catch (error) {
    console.error('Error processing image:', error.message);
    process.exit(1);
  }
}

// Get input and output paths from command line
const inputPath = process.argv[2] || '/tmp/cc-agent/65344648/project/sausage.jpeg';
const outputPath = process.argv[3] || '/tmp/cc-agent/65344648/project/public/sausage_red50_bg.png';

console.log('Adding red-50 background to sausage image...\n');
addRedBackground(inputPath, outputPath);