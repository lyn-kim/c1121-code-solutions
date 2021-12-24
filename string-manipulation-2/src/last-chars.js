/* exported lastChars */

// make copy of string
// give back word that excludes length amount of letters starting from the end

function lastChars(length, string) {
  var newString = string.slice();
  return newString.slice(-length);
}
