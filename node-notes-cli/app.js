const fs = require('fs');
const data = require('./data');
const task = process.argv[2];
let entryNumber = data.nextId;

if (task === 'read') {
  for (const key in data.notes) {
    console.log(`${key} : ${data.notes[key]}`);
  }
} else if (task === 'create') {
  data.notes[entryNumber] = process.argv[3];
  entryNumber++;
  data.nextId = entryNumber;
  const updateNote = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', updateNote, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else if (task === 'delete') {
  if (data.notes[`${process.argv[3]}`]) {
    delete data.notes[`${process.argv[3]}`];
  }
  const updateNote = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', updateNote, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else if (task === 'update') {
  data.notes[`${process.argv[3]}`] = process.argv[4];
  const updateNote = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', updateNote, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
