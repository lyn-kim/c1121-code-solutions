/* exported isPalindromic */

// for each character in the string
// check to see if current character is equal to last character

function isPalindromic(string) {

  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[string.length - 1 + i]) {
      return true;
    }
  }
  return false;
}
