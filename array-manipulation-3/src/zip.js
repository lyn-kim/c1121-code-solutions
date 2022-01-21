/* exported zip */

// create empty array to store result
// create new variable to store number of shortest length
// for each string in the first and second array
// place them into an array and move it to empty array
// give back result

function zip(first, second) {
  var finalArray = [];
  var shorterLength = Math.min(first.length, second.length);
  for (var i = 0; i < shorterLength; i++) {
    finalArray.push([first[i], second[i]]);
  }
  return finalArray;
}

// longer version on my first try - this works!
// function zip(first, second) {
//   var finalArray = [];
//   if (first.length === second.length) {
//     for (var i = 0; i < first.length; i++) {
//       finalArray.push([first[i], second[i]]);
//     }
//   } else if (first.length > second.length) {
//     for (i = 0; i < second.length; i++) {
//       finalArray.push([first[i], second[i]]);
//     }
//   } else if (second.length > first.length) {
//     for (var i = 0; i < first.length; i++) {
//       finalArray.push([first[i], second[i]]);
//     }
//   }

//   return finalArray;
// }
