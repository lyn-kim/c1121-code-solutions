/* exported drop */

// create storage for new list
// for every item on the list starting at the item at the index of count
// check if count is less than the number of items on the list
// if yes, transfer the item on the count index to new list
// if no, give back current new list
// give back final new list

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    if (count < array.length) {
      newArray.push(array[i]);
    } else {
      return newArray;
    }
  }
  return newArray;
}
