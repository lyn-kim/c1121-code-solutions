/* exported intersection */

// create a new variable and assign an empty array literal
// for each item in the first array
// check if second array contains current item
// if yes, move item to result array
// for each item in the second array
// check if first array contains current item and not in the results array already
// if yes, move item to result array
// return result

function intersection(first, second) {
  var result = [];

  for (var i = 0; i < second.length; i++) {
    if (second.includes(first[i])) {
      result.push(first[i]);
    }
  }

  for (i = 0; i < first.length; i++) {
    if (first.includes(second[i]) && (!result.includes(second[i]))) {
      result.push(second[i]);
    }
  }

  return result;
}
