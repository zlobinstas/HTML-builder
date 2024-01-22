const fs = require('fs');
const path = require('path');

const textPath = path.join(__dirname, 'text.txt');

fs.readFile(textPath, { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    return 'error';
  }
  console.log(data);
});
