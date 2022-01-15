/* exported isAnagram */

// create variable to hold firstString with no spaces
// create variable to hold secondString with no space
// create variable to store length of first string with no spaces
// create variable to store length of second string with no spaces
// create variable to split, sort and join the charactets in first string
// create variable to split, sort and join the characters in second string
// if length of first string is equal to length of second string
// check if the sorted version of the first string is equal to sorted version of second string
// if yes, return true
// if no, return false

function isAnagram(firstString, secondString) {
  var firstStringNoSpaces = firstString.replaceAll(' ', '');
  var secondStringNoSpaces = secondString.replaceAll(' ', '');
  var lengthFirst = firstStringNoSpaces.length;
  var lengthSecond = secondStringNoSpaces.length;
  var sortedFirst = firstStringNoSpaces.split('').sort().join('');
  var sortedSecond = secondStringNoSpaces.split('').sort().join('');

  if (lengthFirst === lengthSecond) {
    if (sortedFirst === sortedSecond) {
      return true;
    }
  }
  return false;

}
