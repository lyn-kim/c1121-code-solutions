/* exported pick */

// for every string in the keys array,
// check if source has a key that matches string, then if the key has a value
// if yes, copy key:value to results
// return result

function pick(source, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;
}
