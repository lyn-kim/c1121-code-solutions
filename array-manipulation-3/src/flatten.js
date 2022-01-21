/* exported flatten */

// create storage for new empty list
// for each item in the list
// check if the current item is a list
//   if no, move item to new empty list
//   if yes,
//      move the items in the list to the new empty list
// give back new list

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!(Array.isArray(array[i]))) {
      newArray.push(array[i]);
    } else {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    }
  }
  return newArray;
}
