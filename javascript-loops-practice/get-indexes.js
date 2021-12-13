/* exported getIndexes */

function getIndexes(array) {
  var userInput = [];
  var indexNumber = [];
  for (var i = 0; i < array.length; i++) {
    userInput.push(array[i]);
    indexNumber.push(userInput.length - 1);
  }
  return indexNumber;
}
