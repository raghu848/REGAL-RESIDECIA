const sharp = require('sharp');
const fs = require('fs');

// Read the SVG file
const svgBuffer = fs.readFileSync('./public/favicon.svg');

// Convert SVG to PNG then to ICO
sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toBuffer()
  .then(data => {
    // Write the ICO file
    fs.writeFileSync('./public/favicon.ico', data);
    console.log('Favicon.ico generated successfully!');
  })
  .catch(err => {
    console.error('Error generating favicon:', err);
  });