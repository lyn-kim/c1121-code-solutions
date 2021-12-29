/* exported firstChars */

// create storage for new string
// if string length is less than length
// move as many letters as length into storage
// give back new string

function firstChars(length, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i <= length) {
      newString = string.substring(0, length);
    }
  }
  return newString;
}
