/* exported capitalizeWord */

// take word and lowercase all letters and put it to storage
// take first letter of word and uppercase and put it to storage
// take capitalized letter and replace the first letter of lowercase word and put it to storage
// if the lowercase word is javascript, always give back JavaScript
// give back final word

function capitalizeWord(word) {
  var lower = word.toLowerCase();
  var upper = lower[0].toUpperCase();
  var result = upper + lower.slice(1);
  if (lower === 'javascript') {
    return 'JavaScript';
  }
  return result;
}
