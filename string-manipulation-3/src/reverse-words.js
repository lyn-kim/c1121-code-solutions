/* exported reverseWords */

// create storage for list of words from string
// create storage for final string
// for each word in the string
//  split into individual letters and store in a list
//  reverse the list and join into one string
//  put the reversed string into final string list
// join all the words together and store into result
// give back result

function reverseWords(string) {
  var splitString = string.split(' ');
  var finalString = [];

  for (var i = 0; i < splitString.length; i++) {
    var splitWord = splitString[i].split('');
    var reverseWord = splitWord.reverse().join('');
    finalString.push(reverseWord);
  }
  var result = finalString.join(' ');

  return result;
}
