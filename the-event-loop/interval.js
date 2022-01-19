let count = 3;

const timerID = setInterval(function () {
  console.log(count);
  count--;
  if (count < 0) {
    console.log('Blast off!');
    clearInterval(timerID);
  }
}, 1000);
