const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: 'new'
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport to approximate print size to help with media queries if needed
    await page.setViewport({ width: 1240, height: 1754 });

    console.log('Navigating to CV page...');
    // We assume the server is running on localhost:3000 inside the container
    await page.goto('http://localhost:3000/cv', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    console.log('Generating PDF...');
    const pdfPath = path.join(__dirname, 'public', 'CV.pdf');
    
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5cm',
        right: '0.5cm',
        bottom: '0.5cm',
        left: '0.5cm'
      }
    });

    console.log(`Success! PDF saved to ${pdfPath}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
