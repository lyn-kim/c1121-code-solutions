import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click, Me!</button>;
}

// function CustomButton() {
//   return (
//     <button>Click Me!</button>
//   );
// }

const buttonContainer = document.querySelector('div#root');

ReactDOM.render(CustomButton(), buttonContainer);

// ReactDOM.render(
//   <CustomButton />,
//   buttonContainer
// );
