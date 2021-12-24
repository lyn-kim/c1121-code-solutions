/* exported swapChars */

// split string into a list of individual letters and put it to storage
// take letter from first index and put it to storage
// take letter from second index and put it to storage
// take list of letters and replace letter on the first index with letter from second index
// take list of letters and replace letter on the second index with letter from first index
// combine the individual letters back together into one word and return new word

function swapChars(firstIndex, secondIndex, string) {
  var stringCopy = string.split('');
  var stringCopyFirstIndex = stringCopy[firstIndex];
  var stringCopySecondIndex = stringCopy[secondIndex];

  stringCopy.splice(firstIndex, 1, stringCopySecondIndex);
  stringCopy.splice(secondIndex, 1, stringCopyFirstIndex);
  return stringCopy.join('');
}
