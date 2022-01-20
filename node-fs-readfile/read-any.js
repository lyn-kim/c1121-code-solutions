const fs = require('fs');

const toRead = process.argv[2];

fs.readFile(toRead, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
