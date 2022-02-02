import React from 'react';
import ReactDOM from 'react-dom';

const text = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);

ReactDOM.render(
  text,
  document.getElementById('root')
);
