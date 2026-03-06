const fs = require('fs');
const path = require('path');

// Create build directory
const buildDir = path.join(__dirname, 'build');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Copy HTML files
const htmlFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));
htmlFiles.forEach(file => {
  const source = path.join(__dirname, file);
  const dest = path.join(buildDir, file);
  fs.copyFileSync(source, dest);
  console.log(`Copied ${file}`);
});

console.log('Build completed successfully!');