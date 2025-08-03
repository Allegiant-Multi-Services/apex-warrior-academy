// =====================
// APEX WARRIOR ACADEMY - BUILD SCRIPT
// =====================

const fs = require('fs');
const path = require('path');

// Simple minification functions
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/\s*{\s*/g, '{') // Remove spaces around braces
    .replace(/\s*}\s*/g, '}') // Remove spaces around braces
    .replace(/\s*:\s*/g, ':') // Remove spaces around colons
    .replace(/\s*;\s*/g, ';') // Remove spaces around semicolons
    .replace(/\s*,\s*/g, ',') // Remove spaces around commas
    .trim();
}

function minifyJS(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
    .replace(/\/\/.*$/gm, '') // Remove line comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/\s*{\s*/g, '{') // Remove spaces around braces
    .replace(/\s*}\s*/g, '}') // Remove spaces around braces
    .replace(/\s*;\s*/g, ';') // Remove spaces around semicolons
    .replace(/\s*,\s*/g, ',') // Remove spaces around commas
    .trim();
}

// Build function
function build() {
  console.log('Starting build process...');
  
  // Create build directory if it doesn't exist
  const buildDir = path.join(__dirname, 'dist');
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
  }
  
  // Minify CSS
  try {
    const cssPath = path.join(__dirname, '..', 'resources', 'design', 'style.css');
    const css = fs.readFileSync(cssPath, 'utf8');
    const minifiedCSS = minifyCSS(css);
    
    const outputCSSPath = path.join(buildDir, 'style.min.css');
    fs.writeFileSync(outputCSSPath, minifiedCSS);
    console.log('✓ CSS minified:', outputCSSPath);
  } catch (error) {
    console.error('Error minifying CSS:', error);
  }
  
  // Minify JavaScript files
  const jsFiles = [
    'script.js',
    'performance.js',
    'analytics.js',
    'auth.js'
  ];
  
  jsFiles.forEach(file => {
    try {
      const jsPath = path.join(__dirname, '..', 'resources', 'script', file);
      const js = fs.readFileSync(jsPath, 'utf8');
      const minifiedJS = minifyJS(js);
      
      const outputJSPath = path.join(buildDir, file.replace('.js', '.min.js'));
      fs.writeFileSync(outputJSPath, minifiedJS);
      console.log('✓ JavaScript minified:', outputJSPath);
    } catch (error) {
      console.error(`Error minifying ${file}:`, error);
    }
  });
  
  console.log('Build completed!');
}

// Run build if called directly
if (require.main === module) {
  build();
}

module.exports = { build, minifyCSS, minifyJS }; 