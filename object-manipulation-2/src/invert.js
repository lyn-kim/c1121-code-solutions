/* exported invert */

// create storage for empty object
// for every key in an object
// key names in source object is now key name of empty object
// key names in source object gets assigned as a value for new object
// give back new object

function invert(source) {
  var result = {};
  for (var key in source) {
    result[source[key]] = key;
  }
  return result;
}
