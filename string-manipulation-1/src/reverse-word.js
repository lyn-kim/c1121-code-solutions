/* exported reverseWord */

// create storage for reverse-order string
// take last letter of string and move to storage
// give back reversed string

function reverseWord(word) {
  var reversed = '';
  for (var i = (word.length - 1); i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
