// Performance analysis script - can be run with node
const fs = require('fs');
const path = require('path');

const PERFORMANCE_LOG_PATH = path.join(process.cwd(), 'performance.log');

/**
 * Log performance data to file
 */
function logPerformance(data) {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp}: ${JSON.stringify(data)}\n`;
  
  fs.appendFileSync(PERFORMANCE_LOG_PATH, logEntry);
}

/**
 * Analyze bundle size (simplified version)
 */
function analyzeBundleSize() {
  const buildDir = path.join(process.cwd(), '.next/static');
  
  if (!fs.existsSync(buildDir)) {
    console.log('No build found. Run "npm run build" first.');
    return;
  }
  
  const buildInfo = fs.statSync(buildDir);
  console.log(`Build directory size: ${buildInfo.size} bytes`);
  
  // Log to performance file
  logPerformance({
    type: 'build-analysis',
    buildSize: buildInfo.size,
    timestamp: Date.now()
  });
}

/**
 * Check image optimization
 */
function checkImageOptimization() {
  const publicDir = path.join(process.cwd(), 'public/images');
  
  if (!fs.existsSync(publicDir)) {
    console.log('No public/images directory found');
    return;
  }
  
  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter(file => 
    file.match(/\.(jpg|jpeg|png|webp|avif)$/i)
  );
  
  let totalSize = 0;
  const imageStats = imageFiles.map(file => {
    const filePath = path.join(publicDir, file);
    const stats = fs.statSync(filePath);
    totalSize += stats.size;
    
    return {
      name: file,
      size: stats.size,
      sizeKB: Math.round(stats.size / 1024),
    };
  });
  
  console.log(`Found ${imageFiles.length} images, total size: ${Math.round(totalSize / 1024)}KB`);
  imageStats.forEach(img => {
    console.log(`  ${img.name}: ${img.sizeKB}KB`);
  });
  
  // Log to performance file
  logPerformance({
    type: 'image-analysis',
    totalImages: imageFiles.length,
    totalSizeKB: Math.round(totalSize / 1024),
    images: imageStats,
    timestamp: Date.now()
  });
}

// Run analysis
console.log('🔍 Running Performance Analysis...\n');

console.log('📦 Bundle Analysis:');
analyzeBundleSize();

console.log('\n🖼️ Image Analysis:');
checkImageOptimization();

console.log('\n✅ Performance analysis complete!');
console.log(`📊 Results logged to: ${PERFORMANCE_LOG_PATH}`);