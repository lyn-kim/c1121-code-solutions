import React from 'react';
import ReactDOM from 'react-dom';

const text = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(
  text,
  document.getElementById('root')
);

// const element = React.createElement('h1', null, 'Hello, React');
// const container = document.getElementById('root');
// ReactDOM.render(
//   element,
//   container
//   );
