/* exported union */

// create new variable and assign an empty array to store result
// for each item in the first array
// check if result array DOES NOT include current item
// if yes, move current item to result array
// for each item in the second array
// check if result array DOES NOT include current item
// if yes, move current item to result array
// return result

function union(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (!result.includes(first[i])) {
      result.push(first[i]);
    }
  }

  for (i = 0; i < second.length; i++) {
    if (!result.includes(second[i])) {
      result.push(second[i]);
    }
  }
  return result;
}
