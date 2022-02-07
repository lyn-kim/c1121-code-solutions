const express = require('express');
const app = express();
const path = require('path');

const directory = path.join(__dirname, 'public');
const access = express.static(directory);

app.use(access);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  // console.log('directory:', directory);
  console.log('Express server listening on port 3000');
});
