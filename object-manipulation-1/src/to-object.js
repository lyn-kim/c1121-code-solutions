/* exported toObject */

// create storage for new object
// assign first item in list as name and second object as value
// give back object

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[keyValuePair.length - 1];
  return object;
}
