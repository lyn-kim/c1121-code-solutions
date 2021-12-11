/* exported isUpperCased */

// create storage for uppercase word
// check if the word is all uppercase
// say true if word is all uppercase
// say false if word is not all uppercase

function isUpperCased(word) {
  var allUpper = word.toUpperCase();
  if (word === allUpper) {
    return true;
  }
  return false;
}
