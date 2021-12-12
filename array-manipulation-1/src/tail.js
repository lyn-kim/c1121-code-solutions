/* exported tail */

// create storage for individual items
// create storage for new list of items
// take out items from list one by one except for the first items
// put extracted items back into list
// give back new list

function tail(array) {
  var item = '';
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    item = array[i + 1];
    newArray.push(item);
  }
  return newArray;
}
