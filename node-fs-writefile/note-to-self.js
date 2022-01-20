const fs = require('fs');
const note = '' + process.argv[2];

fs.writeFile('note.txt', note, 'utf8', err => {
  if (err) {
    console.error(err);
  }
});
