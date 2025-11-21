#!/usr/bin/env node

// Script to verify the project setup
const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Regal Residencia Project Setup...');
console.log('============================================\n');

const requiredFiles = [
  'package.json',
  'server.js',
  '.env',
  'models/Inquiry.js',
  'routes/inquiry.js',
  'client/package.json',
  'client/public/index.html',
  'client/public/manifest.json',
  'client/src/App.js',
  'client/src/index.js',
  'client/src/components/HeroSection.js',
  'client/src/components/ProjectOverview.js',
  'client/src/components/Amenities.js',
  'client/src/components/LivingSpaces.js',
  'client/src/components/Gallery.js',
  'client/src/components/Testimonials.js',
  'client/src/components/InquiryForm.js'
];

const optionalFiles = [
  'README.md',
  'PROJECT_SUMMARY.md',
  'SETUP_INSTRUCTIONS.md',
  'dev-start.js',
  'start.js'
];

let allRequiredFilesExist = true;

console.log('📁 Checking required files...\n');

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} (MISSING)`);
    allRequiredFilesExist = false;
  }
});

console.log('\n📋 Checking optional files...\n');

optionalFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`⚠️  ${file} (Not found, but not required)`);
  }
});

console.log('\n' + '='.repeat(50));

if (allRequiredFilesExist) {
  console.log('🎉 All required files are present!');
  console.log('\n🚀 You can now run the development environment with:');
  console.log('   npm run dev');
  console.log('\n📝 For detailed setup instructions, see SETUP_INSTRUCTIONS.md');
} else {
  console.log('❌ Some required files are missing.');
  console.log('   Please check the file structure and ensure all required files are present.');
}

console.log('\n' + '='.repeat(50));