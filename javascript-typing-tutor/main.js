
var span = document.querySelectorAll('span');
document.addEventListener('keydown', checkLetter);

function checkLetter(event) {

  for (var i = 0; i < span.length; i++) {
    var currentLetter = span[i].innerText;
    if (event.key === currentLetter) {
      span[i].className = 'correct';
      span[i + 1].className = 'next';
      return;
    } else if (event.key !== currentLetter) {
      span[i].className = 'incorrect';
      return;
    }
  }

}

// TEMP REUSE
// if (event.key === currentLetter) {
//   span[i].className = 'correct';
// } else {
//   span[i].className = 'next';
// }

// BOOLEAN VARIABLE OPTION
// var correct = true;
// if (correct) {
//   for (var i = 0; i < span.length; i++) {
//     span[i].className = 'correct';
//     console.log('span[i]:', span[i]);
//   }
// }
