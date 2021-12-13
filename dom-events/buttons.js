function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var clickByUser = document.querySelector('.click-button');
clickByUser.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var hoverByUser = document.querySelector('.hover-button');
hoverByUser.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var doubleClickByUser = document.querySelector('.double-click-button');
doubleClickByUser.addEventListener('dblclick', handleDoubleClick, false);
