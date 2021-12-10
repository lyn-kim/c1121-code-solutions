/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var finalWord = [];
  for (var i = 0; i < words.length; i++) {
    words[i] += suffix;
    finalWord.push(words[i]);
  }
  return finalWord;
}
