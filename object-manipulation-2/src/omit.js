/* exported omit */

// create storage for new object
// for each key in source
// if keys list does not have key present
// assign key in source object as key in result object
// give  back object

function omit(source, keys) {
  var result = {};
  for (var key in source) {
    if (keys.includes(key) === false) {
      result[key] = source[key];
    }
  }
  return result;
}

// function omit(source, keys) {
//   var result = {};
//   var sourceKeys = Object.keys(source);
//   for (var i = 0; i < sourceKeys.length; i++) {
//     var key = sourceKeys[i];
//     if (!keys.includes(key)) {
//       result[key] = source[key];
//     }
//   }
//   return result;
// }
