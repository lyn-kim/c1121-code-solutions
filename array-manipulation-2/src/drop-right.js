/* exported dropRight */

// create storage for new list
// for each item in the list, starting from item on the index list-length minus count
// check if count is less than the number of items on the list
// if yes, transfer item to new list
// if no, give back new lst as-is
// give back final new list

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    if (count < array.length) {
      newArray.push(array[i]);
    } else {
      return newArray;
    }
  }
  return newArray;
}
