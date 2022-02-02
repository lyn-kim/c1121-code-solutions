import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return (
    <button> {props.text} </button>
  );
}

const buttonContainer = document.querySelector('#root');

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
