/* exported reverse */

// create storage for individual items
// create storage for new list
// take out last item in the list
// put extracted into new list
// give back new list

function reverse(array) {
  var items = '';
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    items = array[i];
    newArray.push(items);
  }
  return newArray;
}
