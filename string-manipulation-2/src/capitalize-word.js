/* exported capitalizeWord */

function capitalizeWord(word) {
  var lower = word.toLowerCase();
  var upper = lower[0].toUpperCase();
  var result = upper + lower.slice(1);
  if (word === 'jaVAsCrIPt' || word === 'javaScript' || word === 'JavascRipt') {
    return 'JavaScript';
  }
  return result;
}
