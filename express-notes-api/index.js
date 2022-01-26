const express = require('express');
const app = express();
const data = require('./data');

app.get('/api/notes', (req, res) => {
  const notesList = [];
  for (const key in data.notes) {
    notesList.push(data.notes[key]);
  }
  res.json(notesList);
});

app.get('/api/notes/:id', (req, res) => {
  const errorMessage = {
    error: 'id must be a positive integer'
  };
  if (req.params.id < 0) {
    res.sendStatus(400);
    res.json(errorMessage);
  }
});

// app.use(express.json());

// app.delete('/api/notes/:id', (req, res) => {
//   if (req.params.id < 0) {
//     res.sendStatus(400);
//     console.error('id must be a positive integer');
//   }
// });

app.listen(3000, () => {
});
