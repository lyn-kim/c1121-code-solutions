/* exported compact */

// create storage for new list
// for each item in the list:
//    check if item is true
//        if yes - add to list
//        if no - skip
// give back new list

function compact(array) {
  var newList = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      newList.push(array[i]);
    }
  }
  return newList;
}
