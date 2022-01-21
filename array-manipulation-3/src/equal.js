/* exported equal */

// if length of first list is not equal to length of second list
//  return false
// for every item in the list, starting from the first item
// check if item on the first list is same as item on the second list
//    if not, return false
// otherwise, return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
