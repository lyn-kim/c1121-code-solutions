import React from 'react';
// importing react from react package
import ReactDOM from 'react-dom';

// line 7 - returning the result of an expression of the react element button
// with a js expression props.text
function CustomButton(props) {
  return (
    <button> {props.text} </button>
  );
}

const buttonContainer = document.querySelector('#root');

// assigning the result of an expression to the const variable element
// opening div for the React element
// React element CustomButton with a
// prop text with a value (js expression, number, etc)
const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

ReactDOM.render(
  element,
  buttonContainer
);
