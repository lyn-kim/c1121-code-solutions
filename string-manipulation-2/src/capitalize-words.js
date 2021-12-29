/* exported capitalizeWords */

// turn string into lowercase and split them into individual words
// take first letter and uppercase and join with rest of string starting index 1
// merge and give back the words together in one string

function capitalizeWords(string) {
  var words = string.toLowerCase().split(' ');

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }
  return words.join(' ');
}
