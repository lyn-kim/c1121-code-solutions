/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var finalWord = [];
  for (var i = 0; i < words.length; i++) {
    finalWord.push(words[i] + suffix);
  }
  return finalWord;
}
