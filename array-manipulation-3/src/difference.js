/* exported difference */

// create new variable with empty array to store result
// for each item in the first array
// check if second array DOES NOT include current item
// if yes, move item to result
// for each item in the second array
// check if first array DOES NOT include current item
// if yes, move item to result
// return result

function difference(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (!(second.includes(first[i]))) {
      result.push(first[i]);
    }
  }

  for (i = 0; i < second.length; i++) {
    if (!(first.includes(second[i]))) {
      result.push(second[i]);
    }
  }

  return result;
}
