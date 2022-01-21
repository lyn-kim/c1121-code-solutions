const fs = require('fs');
const data = require('./data');
const task = process.argv[2];
let entryNumber = data.nextId;
// console.log(process.argv);
// console.log(entryNumber);

if (task === 'read') {
  for (const key in data.notes) {
    console.log(`${key} : ${data.notes[key]}`);
  }
} else if (task === 'create') {
  data.notes[entryNumber] = process.argv[3];
  entryNumber++;
  data.nextId = entryNumber;
  console.log(entryNumber);
  const newNote = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', newNote, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
// } else if (task === 'delete') {
//   for (const key in data.notes) {
//     if (key === parseInt(process.argv[3])) {
//       console.log(parseInt(process.argv[3]));
//     }
//   }
}

// USER CAN UPDATE A NOTE
// else if (task === 'create') {
//   data.notes[entryNumber] = process.argv[3];
//   entryNumber++;
//   const newNote = JSON.stringify(data, null, 2);
//   fs.writeFile('./data.json', newNote, err => {
//     if (err) {
//       console.error(err);
//       process.exit(1);
//     }
//   });
