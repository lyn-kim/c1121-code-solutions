/* exported countdown */

function countdown(number) {
  var count = [];
  for (var i = number; i >= 0; i--) {
    count.push(i);
  }
  return count;
}
