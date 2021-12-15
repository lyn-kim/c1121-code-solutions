function lightSwitch(event) {
  if (button.className === 'light on') {
    button.className = 'light off';
    bg.className = 'off-bg centered';
  } else {
    button.className = 'light on';
    bg.className = 'on-bg centered';
  }
}

var button = document.querySelector('button');
var bg = document.querySelector('body');
button.addEventListener('click', lightSwitch);
