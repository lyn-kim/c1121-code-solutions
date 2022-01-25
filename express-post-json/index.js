const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (let i = 0; i < nextId; i++) {
    gradesArray.push(grades);
  }
  res.json(grades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  req.body.id = nextId++;
  res.status(201).json(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
