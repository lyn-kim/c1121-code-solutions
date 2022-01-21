/* exported unique */

// assign an empty array to a results variable
// for each string in the array
// check if results contains current string
// if no, move string to results array
// if yes, skip
// return result

function unique(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (!(result.includes(array[i]))) {
      result.push(array[i]);
    }
  }
  return result;
}
