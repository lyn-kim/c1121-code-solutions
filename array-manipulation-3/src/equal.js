/* exported equal */

// if length of first list is same as length of second list
// for every item in the list, starting from the first item
// check if item on the first list is same as item on the second list
//    if not, return false
// if length of first list is not same as length of second list
//    return false
// otherwise, return true

function equal(first, second) {
  if (first.length === second.length) {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}
