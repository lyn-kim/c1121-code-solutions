/* exported ransomCase */

// lowercase all chaacters in string
// take even characters in the string and capitalize

function ransomCase(string) {
  for (var i = 0; i < string.length; i++) {
    var copy = string.toLowerCase();
    if (copy[i] === 1) {
      copy[i].toUpperCase();
    } else if (copy[i] % 3 === 0) {
      copy[i].toUpperCase();
    }
  }
}
