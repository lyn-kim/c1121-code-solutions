/* exported take */

// create storage for new list
// for every item in list until the number of items is less than count
// check if count is less than the number of items in the list
// if yes, send item to new list
// if no, just return current list
// finally give back final list

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (count < array.length) {
      newArray.push(array[i]);
    } else {
      return newArray;
    }
  }
  return newArray;
}
