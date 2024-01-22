const fs = require('fs');
const path = require('path');

const textPath = path.join(__dirname, 'work.txt');

const { stdin, stdout } = process;

if (
  !fs.access(textPath, (err) => {
    if (err) {
      console.log('wtf2');
    }
  })
) {
  fs.writeFile(textPath, '', (err) => {
    if (err) {
      console.log('wtf');
    }
  });
}

console.log('Welcome! Please, write your text here:');

stdin.on('data', (data) =>
  fs.appendFile(textPath, data, (err) => {
    if (err) {
      console.log("I can't write it down");
    }
  }),
);
