const express = require('express');
const app = express();
const pg = require('pg');
const notPositiveIntMsg = {
  error: 'id must be a positive integer'
};
const unexpectedErrorMsg = {
  error: 'An unexpected error occurred.'
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

app.listen(3000, () => {
});
