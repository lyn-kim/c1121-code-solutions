const express = require('express');
const app = express();
const pg = require('pg');
const unexpectedErrorMsg = {
  error: 'An unexpected error occurred.'
};
const invalidGradeMsg = {
  error: 'missing or invalid input'
};
const invalidGradeIdMsg = {
  error: 'invalid gradeId'
};

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
  select "gradeId",
         "name",
         "course",
         "score",
         "createdAt"
    from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      if (!grade) {
        res.status(404);
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(unexpectedErrorMsg);
    });

});

app.post('/api/grades', (req, res) => {
  const input = req.body;

  if (input.name === undefined ||
    input.course === undefined ||
    input.score === undefined ||
    input.score < 0 ||
    input.score > 100) {
    res.status(400).json(invalidGradeMsg);
    return;
  }

  const params = [input.name, input.course, input.score];
  const sql = `
  insert into grades (name, course, score)
  values ($1, $2, $3);
  `;

  db.query(sql, params)
    .then(result => {
      const grade = result.rowCount;
      if (!grade) {
        res.status(500).json(unexpectedErrorMsg);
      } else {
        res.status(201).json(input);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(unexpectedErrorMsg);
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const idNotFoundMsg = {
    error: `cannot find grade with id ${gradeId}`
  };

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json(invalidGradeIdMsg);
    return;
  }

  const input = req.body;
  if (input.name === undefined ||
    input.course === undefined ||
    input.score === undefined ||
    input.score < 0 ||
    input.score > 100) {
    res.status(400).json(invalidGradeMsg);
    return;
  }

  const params = [input.name, input.course, input.score];
  const sql = `
    update grades
       set name   = $1,
           course = $2,
           score  = $3
     where "gradeId" = ${gradeId};
    `;

  db.query(sql, params)
    .then(result => {
      const grade = result.rowCount;
      if (!grade) {
        res.status(404).json(idNotFoundMsg);
      } else {
        res.status(200).json(input);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(unexpectedErrorMsg);
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const idNotFoundMsg = {
    error: `cannot find note with id ${gradeId}`
  };

  if (gradeId < 0 || !Number.isInteger(gradeId)) {
    res.status(400).json(invalidGradeIdMsg);
    return;
  }

  const sql = `
    delete from grades
    where "gradeId" = ${gradeId};
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rowCount;
      if (!grade) {
        res.status(404).json(idNotFoundMsg);
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(unexpectedErrorMsg);
    });

});

app.listen(3000, () => {
});
