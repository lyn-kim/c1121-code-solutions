/* exported isLowerCased */

// create storage for all lowercase word
// check if word is all lowercase
// say true if word is all lowercase
// say false if word is not all lowercase

function isLowerCased(word) {
  var lowercase = word.toLowerCase();
  if (word === lowercase) {
    return true;
  }
  return false;
}
