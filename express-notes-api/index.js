const express = require('express');
const app = express();
const data = require('./data');
const fs = require('fs');
const unexpectedErrorMsg = {
  error: 'An unexpected error occurred.'
};
const notPositiveIntMsg = {
  error: 'id must be a positive integer'
};
const needContentMsg = {
  error: 'content is a required field'
};

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesList = [];
  for (const key in data.notes) {
    notesList.push(data.notes[key]);
  }
  res.json(notesList);
});

app.get('/api/notes/:id', (req, res) => {
  const idNotFoundMsg = {
    error: `cannot find note with id ${req.params.id}`
  };

  if (req.params.id < 0) {
    res.status(400).json(notPositiveIntMsg);
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404).json(idNotFoundMsg);
  } else if (data.notes[req.params.id]) {
    res.status(200).json(data.notes[req.params.id]);
  }
});

app.post('/api/notes', (req, res) => {
  const input = req.body;
  if (req.body.content === undefined) {
    res.status(400).json(needContentMsg);
  } else {
    data.notes[data.nextId] = input;
    data.notes[data.nextId].id = data.nextId++;
    const updateNote = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', updateNote, err => {
      if (err) {
        console.error(err);
        res.status(500).json(unexpectedErrorMsg);
      } else {
        res.status(201).json(input);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const idNotFoundMsg = {
    error: `cannot find note with id ${req.params.id}`
  };

  if (req.params.id < 0 || !(Math.floor(req.params.id))) {
    res.status(400).json(notPositiveIntMsg);
  } else if (req.params.id > 0 && data.notes[req.params.id] === undefined) {
    res.status(404).json(idNotFoundMsg);
  } else {
    delete data.notes[req.params.id];
    const updateNote = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', updateNote, err => {
      if (err) {
        console.error(err);
        res.status(500).json(unexpectedErrorMsg);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const idNotFoundMsg = {
    error: `cannot find note with id ${req.params.id}`
  };

  if (req.params.id < 0 || !(Math.floor(req.params.id))) {
    res.status(400).json(notPositiveIntMsg);
  } else if (req.body.content === undefined) {
    res.status(400).json(needContentMsg);
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404).json(idNotFoundMsg);
  } else {
    data.notes[req.params.id] = req.body;
    data.notes[req.params.id].id = parseInt(req.params.id);
    const updateNote = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', updateNote, err => {
      if (err) {
        console.error(err);
        res.status(500).json(unexpectedErrorMsg);
      } else {
        res.status(200).json(req.body);
      }
    });
  }
});

app.listen(3000, () => {
});
