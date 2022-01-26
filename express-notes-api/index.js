const express = require('express');
const app = express();
const data = require('./data');
const fs = require('fs');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesList = [];
  for (const key in data.notes) {
    notesList.push(data.notes[key]);
  }
  res.json(notesList);
});

app.get('/api/notes/:id', (req, res) => {
  const notPositiveIntMsg = {
    error: 'id must be a positive integer'
  };
  const idNotFoundMsg = {
    error: `cannot find note with id ${req.params.id}`
  };
  if (req.params.id < 0) {
    res.status(400).json(notPositiveIntMsg);
  } else if (req.params.id) {
    for (const key in data.notes) {
      if (key === req.params.id) {
        res.status(200).json(data.notes[req.params.id]);
      }
    }
  } else {
    for (const key in data.notes) {
      if (!(key.includes(req.params.id))) {
        res.status(404).json(idNotFoundMsg);
      }
    }
  }
});

app.post('/api/notes', (req, res) => {
  const input = req.body;
  // const needContentMsg = {
  //   error: 'content is a required field'
  // };
  data.notes[data.nextId] = input;
  data.notes[data.nextId].id = data.nextId++;
  res.status(201).json(input);
  const updateNote = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', updateNote, err => {
    if (err) {
      console.error(err);
      res.status(500);
    }
  });
});

app.listen(3000, () => {
});
