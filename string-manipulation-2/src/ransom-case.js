/* exported ransomCase */

// create storage for new string
// if index of string is zero or even, make character lower case
// if index of string is odd, make character upper case
// give back new string

function ransomCase(string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      result += string[i].toLowerCase();
    } else {
      result += string[i].toUpperCase();
    }
  }
  return result;
}
