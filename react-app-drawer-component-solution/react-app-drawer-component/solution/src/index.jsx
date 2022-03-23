import React from 'react';
import ReactDOM from 'react-dom';
import AppDrawer from './app-drawer';

const menuItems = [
  'The Legend of Zelda',
  'A Link to the Past',
  'Ocarina of Time',
  'The Wind Waker',
  'Breath of the Wild'
];

ReactDOM.render(
  <AppDrawer menuHeading="Choose a Game" menuItems={menuItems}/>,
  document.querySelector('#root')
);
