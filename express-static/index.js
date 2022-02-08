const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'public');
const staticMiddleware = express.static(publicPath);

app.use(staticMiddleware);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  // console.log('directory:', directory);
  console.log('Express server listening on port 3000');
});
