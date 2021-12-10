/* exported filterOutStrings */

function filterOutStrings(values) {
  var numOnly = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      numOnly.push(values[i]);
    }
  }
  return numOnly;
}
