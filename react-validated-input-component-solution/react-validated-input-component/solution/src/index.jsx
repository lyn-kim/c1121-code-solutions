import React from 'react';
import ReactDOM from 'react-dom';
import ValidatedInput from './validated-input';

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col col-xs-4">
        <ValidatedInput />
      </div>
    </div>
  </div>,
  document.querySelector('#root')
);
