/* exported getWords */

// create storage to contain separated words
// break apart string into separate words
// if there is one or more words, give back the words in a list form
// if there are no words in the string, give back empty list

function getWords(string) {
  var words = string.split(' ');
  if (string !== '') {
    return words;
  }
  return [];
}
