/* exported swapChars */

// function swapChars(firstIndex, secondIndex, string) {
//   var newString = string.split('');
//   console.log(newString);
//   var first = newString[firstIndex];
//   var second = newString[secondIndex];

//   newString = newString.replace(string[firstIndex], second);
//   newString.replace(string[secondIndex], first);
//   return newString.join('');
// }

function swapChars(firstIndex, secondIndex, string) {
  var newString = string;
  newString = newString.replace(string[firstIndex], string[secondIndex]);
  newString = newString.replace(string[secondIndex], newString[firstIndex]);
  return newString;
}
