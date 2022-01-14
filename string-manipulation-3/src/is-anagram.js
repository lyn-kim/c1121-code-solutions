/* exported isAnagram */

// for each letter in a string
// check if secondString contains current letter
// if yes, return true
// if no, return false

function isAnagram(firstString, secondString) {
  for (var i = 0; i < firstString.length; i++) {
    if (secondString.includes(firstString.charAt(i)) === true) {
      return true;
    }
  }
  return false;
}
