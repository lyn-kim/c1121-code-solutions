/* exported lastChars */

function lastChars(length, string) {
  var newString = '';
  for (var i = (string.length - 1); i > length; i--) {
    if (i >= length) {
      newString = string.slice(-length);
    } else {
      newString = string.slice(0, string.length);
    }
  }
  return newString;
}
