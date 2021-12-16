// create storage for directory to the modal box
// create storage for directory to the open button
// create action to take when a user clicks the open button
// when open button clicks
//      - if the modal box is not visible, make modal box appear
// make storage for directory to no button
// create action to take when a user clicks the no button
// when no button clicks
//       - hide modal

var hidden = document.querySelector('div.relative');
var openButton = document.querySelector('button.open-button');
openButton.addEventListener('click', modalStatus);

function modalStatus(event) {
  hidden.className = 'relative';
}

var noButton = document.querySelector('button.no-button');
noButton.addEventListener('click', closeModal);

function closeModal(event) {
  hidden.className = 'relative display-none';
}
