const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

// List of required images
const requiredImages = [
    'avatar.png',
    'project1.png',
    'project2.png',
    'project3.png',
    'project4.png',
    'cert1.png',
    'cert2.png',
    'cert3.png',
    'cert4.png',
    'github.png',
    'linkedin.png',
    'twitter.png',
    'portfolio.png'
];

// Create placeholder SVG for each required image
requiredImages.forEach(imageName => {
    const svgContent = `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="#333"/>
            <text x="100" y="100" font-family="Arial" font-size="14" fill="white" text-anchor="middle">
                ${imageName.replace('.png', '')}
            </text>
        </svg>
    `;
    
    fs.writeFileSync(path.join(imagesDir, imageName.replace('.png', '.svg')), svgContent);
    console.log(`Created placeholder for ${imageName}`);
}); 