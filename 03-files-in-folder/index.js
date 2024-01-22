const fs = require('fs');
const path = require('path');

const secretFolder = path.join(__dirname, 'secret-folder');

fs.readdir(secretFolder, { encoding: 'utf-8' }, (err, files) => {
  if (err) {
    console.log('err');
  } else {
    files.forEach((file) =>
      fs.statSync(`${secretFolder}/${file}`).isFile() && file !== '.DS_Store'
        ? console.log(
            `${file.slice(0, file.indexOf('.'))} - ${file.slice(
              file.indexOf('.') + 1,
            )} - ${fs.statSync(`${secretFolder}/${file}`).size / 1000}kb`,
          )
        : 1,
    );
  }
});
