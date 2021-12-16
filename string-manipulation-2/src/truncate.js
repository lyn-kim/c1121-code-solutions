/* exported truncate */

// create storage for shortened string
// remove all characters in the string starting at length and add ...
// give back truncated word

function truncate(length, string) {
  var shortened = string.slice(string[length], length) + '...';
  return shortened;
}
