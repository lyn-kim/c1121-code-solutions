/* exported capitalizeWord */

function capitalizeWord(word) {
  var lower = word.toLowerCase();
  var upper = lower[0].toUpperCase();
  var result = upper + lower.slice(1);
  if (lower === 'javascript') {
    return 'JavaScript';
  }
  return result;
}
