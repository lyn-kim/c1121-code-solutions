var text = document.querySelector('.countdown-display');

var count = 3;

setInterval(function () {
  text.textContent = count--;
  if (count < 0) {
    text.textContent = '~Earth Beeeelooowww Us~';
    clearInterval();
  }
}, 1000);
