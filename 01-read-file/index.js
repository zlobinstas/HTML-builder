const fs = require('fs');
const path = require('path');
const textPath = path.join(__dirname, 'text.txt');
const file = fs.createReadStream(textPath, 'utf-8');

file.on('data', (chunk) => console.log(chunk));
