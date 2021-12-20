/* exported includes */

// for each item on the list, starting from the first item
// check if item is same as value
// if yes, say true
// if no, say false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
