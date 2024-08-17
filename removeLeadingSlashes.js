const fs = require('fs');
const path = require('path');

const targetDirectory = 'C:\\Users\\ignas\\Documents\\it-mokymai\\docs\\.vuepress\\dist';

function processMainIndex(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Remove leading / in href="/ and src="/ for main index.html
    const modifiedContent = fileContent
        .replace(/href="\//g, 'href="')
        .replace(/src="\//g, 'src="');

    fs.writeFileSync(filePath, modifiedContent, 'utf8');
    console.log(`Processed main index.html: ${filePath}`);
}

function processIndexFiles(filePath, depth, secondLevelFolder) {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    let replacement = '';

    // Apply second-level rules (../) if within or below a second-level folder
    if (depth === 2) {
        replacement = '../';
    } else if (depth >= 3 && filePath.includes(secondLevelFolder)) {
        replacement = '../';
    } else if (depth >= 3) {
        replacement = '../../';
    }

    console.log(`Processing ${filePath} at depth ${depth} with replacement ${replacement}`);

    const modifiedContent = fileContent
        .replace(/href="\//g, `href="${replacement}`)
        .replace(/src="\//g, `src="${replacement}`);

    fs.writeFileSync(filePath, modifiedContent, 'utf8');
    console.log(`Processed index.html at depth ${depth}: ${filePath}`);
}

function processDirectory(directory, depth = 1, secondLevelFolder = '') {
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const fullPath = path.join(directory, file);

        if (fs.statSync(fullPath).isDirectory()) {
            if (path.basename(fullPath) === 'assets') {
                console.log(`Skipping directory: ${fullPath}`);
                return;
            }
            // If we are at the second level, store the folder name
            let newSecondLevelFolder = depth === 2 ? path.basename(fullPath) : secondLevelFolder;
            // Recursively process subdirectories, increasing the depth
            processDirectory(fullPath, depth + 1, newSecondLevelFolder);
        } else if (file === 'index.html') {
            if (depth === 1) {
                processMainIndex(fullPath);
            } else {
                processIndexFiles(fullPath, depth, secondLevelFolder);
            }
        }
    });
}

// Start processing the target directory
processDirectory(targetDirectory);