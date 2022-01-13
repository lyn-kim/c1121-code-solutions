/* exported zip */

function zip(first, second) {
  var newArray = [];
  var finalArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
    newArray.push(second[i]);
  }

  for (i = 0; i < newArray.length; i++) {
    finalArray.push(newArray.slice(0, 1));
    // console.log(finalArray);
  }

  return finalArray;
}

// function chunk(array, size) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i += size) {
//     if (i < array.length) {
//       newArray.push(array.slice(i, size + i));
//     } else {
//       return newArray;
//     }
//   }
//   return newArray;
// }
