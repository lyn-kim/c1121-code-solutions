/* exported filterOutStrings */

function filterOutStrings(values) {
  var numOnly = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      numOnly.push(values[i]);
    }
  }
  return numOnly;
}
