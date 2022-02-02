import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click, Me!</button>;
}

const buttonContainer = document.querySelector('div#root');

ReactDOM.render(CustomButton(), buttonContainer);
