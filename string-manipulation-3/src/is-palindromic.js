/* exported isPalindromic */

// create storage for storing strings without spaces
// create storage for storing half length of any string
// for each character in the string
// check to see if the character at index mirroring the current character index is NOT equal to each other
// if yes, return false
// if no, return true

function isPalindromic(string) {
  var stringWithoutSpaces = string.replaceAll(' ', '');
  var halfLength = Math.floor(string.length / 2);

  for (var i = 0; i < halfLength; i++) {
    if (stringWithoutSpaces[i] !== stringWithoutSpaces[stringWithoutSpaces.length - i - 1]) {
      return false;
    }
  }
  return true;
}
