/* exported chunk */

// create storage for new list
// for each item in the list, starting from the first item
// check if the index of the item is less than number of items in the list
// if yes, take away array from current index to index plus size and put it into new list
// if no, give back new list, as-is
// give back final new list

function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    if (i < array.length) {
      newArray.push(array.slice(i, size + i));
    } else {
      return newArray;
    }
  }
  return newArray;
}
