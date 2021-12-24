
var span = document.querySelectorAll('span');
document.addEventListener('keydown', checkLetter);

function checkLetter(event) {

  for (var i = 0; i < span.length; i++) {
    if (span[i].className === 'next' || span[i].className === 'incorrect') {
      var currentLetter = span[i].innerText;
      if (event.key !== currentLetter) {
        span[i].className = 'incorrect';
      } else {
        span[i].className = 'correct';
        span[i + 1].className = 'next';
      }
      return;
    }
  }
}
