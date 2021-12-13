/* exported getValues */

// create storage for values
// find values in list and move it to storage
// give back new list in storage

function getValues(object, key) {
  var values = [];
  for (var keys in object) {
    values.push(object[keys]);
  }
  return values;
}
