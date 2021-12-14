var clicks = 0;

function lightSwitch(event) {
  clicks++;
  if (clicks === 1) {
    button.className = 'light off';
    bg.className = 'off-bg centered';
  } else if (clicks % 2 === 0) {
    button.className = 'light on';
    bg.className = 'on-bg centered';
  } else {
    button.className = 'light off';
    bg.className = 'off-bg centered';
  }
}

var button = document.querySelector('button');
var bg = document.querySelector('body');
button.addEventListener('click', lightSwitch);
