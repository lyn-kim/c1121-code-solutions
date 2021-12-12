/* exported initial */

// create storage for items
// create storage for new list
// take out items one by one from list except last item
// put back item into new list
// give back new list

function initial(array) {
  var item = '';
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    item = array[i];
    newArray.push(item);
  }
  return newArray;
}
