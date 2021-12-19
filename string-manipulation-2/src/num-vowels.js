/* exported numVowels */

// create storage of lowercase string
// create storage for count
// check if letter contains a vowel
// if yes, increment count by 1
// give back total count

function numVowels(string) {
  var result = string.toLowerCase();
  var vowelCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (result[i] === 'a' || result[i] === 'e' || result[i] === 'i' || result[i] === 'o' || result[i] === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}
