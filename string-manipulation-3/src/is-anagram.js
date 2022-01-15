/* exported isAnagram */

// for each letter in a string
// check if secondString contains current letter
// if yes, return true
// if no, return false

function isAnagram(firstString, secondString) {
  var firstStringNoSpaces = firstString.replaceAll(' ', '');
  var secondStringNoSpaces = secondString.replaceAll(' ', '');

  for (var i = 0; i < firstString.length; i++) {
    if (secondStringNoSpaces.includes(firstStringNoSpaces.charAt(i)) === true) {
      return true;
    }
  }
  return false;
}
