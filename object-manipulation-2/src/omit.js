/* exported omit */

// create storage for new object
// retrieve all keys in source
// for each key retrieved, check if keys list includes key
// if no, transfer key and value to object
// give  back object

function omit(source, keys) {
  var result = {};
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    var key = sourceKeys[i];
    if (!keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
}
