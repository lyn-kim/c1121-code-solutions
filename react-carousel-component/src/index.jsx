import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const imgArray = [
  {
    id: 0,
    url: 'https://images.unsplash.com/photo-1530292178889-67a8dc571e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1496034663057-6245f11be793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1532728233432-ca70fefe237a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHJhaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1622902769420-d7a0a4720e63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHJhaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1470293728846-df1a5aa55d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHJhaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
  }
];

ReactDOM.render(
  <Carousel imgArray={imgArray} />,
  document.querySelector('#root')
);
