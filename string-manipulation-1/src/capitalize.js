/* exported capitalize */

// create storage for lowercase string
// create storage for capitalized first character of the string
// replace first character of lowercase string with capitalized character
// give back string with capitalized first character

function capitalize(word) {
  var lowercase = word.toLowerCase();
  var firstChar = word[0].toUpperCase(lowercase[0]);
  var finalWord = lowercase.replace(lowercase[0], firstChar);
  return finalWord;
}
