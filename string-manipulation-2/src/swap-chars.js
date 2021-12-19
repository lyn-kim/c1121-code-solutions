/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var newString = string;
  newString = newString.replace(string[firstIndex], string[secondIndex]);
  newString = newString.replace(string[secondIndex], newString[firstIndex]);
  return newString;
}
