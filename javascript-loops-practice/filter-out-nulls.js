/* exported filterOutNulls */

function filterOutNulls(values) {
  var numOnly = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      numOnly.push(values[i]);
    } else {
      delete values[i];
    }
  }
  return numOnly;
}
