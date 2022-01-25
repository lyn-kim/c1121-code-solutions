const express = require('express');

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

const app = express();

app.get('/api/grades', function (req, res) {
  const grade = [];
  for (const key in grades) {
    grade.push({ key });
  }
  res.json(grade);
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
