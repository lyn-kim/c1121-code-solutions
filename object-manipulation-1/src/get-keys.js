/* exported getKeys */

// create storage to put keys
// find keys in list and move it to list
// give back list

function getKeys(object) {
  var keyList = [];
  for (var key in object) {
    keyList.push(key);
  }
  return keyList;
}
