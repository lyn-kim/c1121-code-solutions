/* exported takeRight */

// create storage for new list
// for every list on the item starting at length of list minus count
// check if count is less than the number of items in the list
// if yes, transfer item to new list
// if no, give back new list as is
// give back final new list

function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (count < array.length) {
      newArray.push(array[i]);
    } else {
      return newArray;
    }
  }
  return newArray;
}
