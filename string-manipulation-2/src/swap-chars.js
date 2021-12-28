/* exported swapChars */

// create storage for new string
// for every letter in the string
// check if the index is same as firstIndex
//    if yes, add letter in the string at secondIndex to new string
// check if index is same as secondIndex
//    if yes, add letter in the string at firstIndex to new string
// otherwise, add the letters at current index to new string
// give back new string

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}

// function swapChars(firstIndex, secondIndex, string) {
//   var stringCopy = string.split('');
//   var stringCopyFirstIndex = stringCopy[firstIndex];
//   var stringCopySecondIndex = stringCopy[secondIndex];

//   stringCopy.splice(firstIndex, 1, stringCopySecondIndex);
//   stringCopy.splice(secondIndex, 1, stringCopyFirstIndex);
//   return stringCopy.join('');

// split string into a list of individual letters and put it to storage
// take letter from first index and put it to storage
// take letter from second index and put it to storage
// take list of letters and replace letter on the first index with letter from second index
// take list of letters and replace letter on the second index with letter from first index
// combine the individual letters back together into one word and return new word
// }
