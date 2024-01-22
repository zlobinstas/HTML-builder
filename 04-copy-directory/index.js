const fs = require('fs');
const path = require('path');

const filesInit = path.join(__dirname, 'files');
const filesCopy = path.join(__dirname, 'files-copy');

fs.mkdir(filesCopy, { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  }
});

fs.readdir(`${__dirname}/files`, { encoding: 'utf-8' }, (err, files) => {
  if (err) {
    console.log('err');
  } else {
    files.forEach((file) => {
      fs.copyFile(
        `${filesInit}/${file}`,
        `${filesCopy}/${file}`,
        fs.constants.COPYFILE_EXCL,
        (err) => {
          if (err) {
            console.log('err2');
          }
        },
      );
    });
  }
});
