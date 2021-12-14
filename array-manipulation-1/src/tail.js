/* exported tail */

// create storage for individual items
// create storage for new list of items
// take out items from list one by one except for the first items
// put extracted items back into list
// give back new list

function tail(array) {
  var item = '';
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    item = array[i];
    newArray.push(item);
  }
  return newArray;
}
