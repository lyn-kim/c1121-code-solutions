var letter = document.querySelectorAll('span');
document.addEventListener('keydown', checkLetter);

function checkLetter(event) {
  for (var i = 0; i < letter.length; i++) {
    if (event.target === letter[i]) {
      letter[i].className = 'correct';
    } else {
      letter[i].className = 'incorrect';
    }
  }
}
