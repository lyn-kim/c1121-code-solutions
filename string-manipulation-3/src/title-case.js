/* exported titleCase */

// create storage to store list of each words in the title
// create storage for each capitalized word
// for each word in the title
// make all letters lowercase and store it to storage
// make first letter uppercase and combine with lowercase letters minus first letter and store it to storage
// move the capitalized word to storage
// check if current word is and, or, nor, but, an , the, as, at, by, for, in, of, on, per or to
//    if yes, make them lowercase
// check if the length of current word is 1
//    if yes, capitalize letter
// check if current index is 0
//    if yes, make first letter of word at current index uppercase
// check if current word is Api or Javascript
//    if yes, make it API or JavaScript

function titleCase(title) {

  var wordInTitle = title.split(' ');
  var capitalizedTitle = [];

  // function capitalizeLowercaseWord(word) {
  //   return word[0].toUpperCase() + word.slice(1);
  // }

  for (var i = 0; i < wordInTitle.length; i++) {
    var lowercase = wordInTitle[i].toLowerCase();
    var capitalizedWord = lowercase[0].toUpperCase() + lowercase.slice(1);
    capitalizedTitle.push(capitalizedWord);

    if (capitalizedTitle[i] === 'And' ||
      capitalizedTitle[i] === 'Or' ||
      capitalizedTitle[i] === 'Nor' ||
      capitalizedTitle[i] === 'But' ||
      capitalizedTitle[i] === 'An' ||
      capitalizedTitle[i] === 'The' ||
      capitalizedTitle[i] === 'As' ||
      capitalizedTitle[i] === 'At' ||
      capitalizedTitle[i] === 'By' ||
      capitalizedTitle[i] === 'For' ||
      capitalizedTitle[i] === 'In' ||
      capitalizedTitle[i] === 'Of' ||
      capitalizedTitle[i] === 'On' ||
      capitalizedTitle[i] === 'Per' ||
      capitalizedTitle[i] === 'To') {
      capitalizedTitle[i] = capitalizedTitle[i].toLowerCase();
    }

    if (capitalizedTitle[i].length === 1) {
      capitalizedTitle[i] = capitalizedTitle[i].toUpperCase();
    }

    if (i === 0) {
      capitalizedTitle[i] = lowercase[0].toUpperCase() + lowercase.slice(1);
    }

    if (wordInTitle[i - 1] !== undefined && wordInTitle[i - 1].endsWith(':')) {
      capitalizedTitle[i] = capitalizedTitle[i][0].toUpperCase() + lowercase.slice(1);
    }

    if (capitalizedTitle[i].includes('-')) {
      var splitCurrentWord = capitalizedTitle[i].split('-');

      for (i = 0; i < splitCurrentWord.length; i++) {
        var capitalized = splitCurrentWord[i][0].toUpperCase() + splitCurrentWord[i].slice(1);
        capitalized = capitalized.join('-');
        console.log('capitalized:', capitalized);
        // console.log('splitCurrentWord:', splitCurrentWord);

      }
      // console.log('capitalizedTitle[i]:', capitalizedTitle[i]);
      return capitalizedTitle[i];
    }

    if (capitalizedTitle[i] === 'Api') {
      capitalizedTitle[i] = 'API';
    } else if (capitalizedTitle[i] === 'Javascript') {
      capitalizedTitle[i] = 'JavaScript';
    } else if (capitalizedTitle[i] === 'Javascript:') {
      capitalizedTitle[i] = 'JavaScript:';
    }

  }

  var result = capitalizedTitle.join(' ');
  return result;
}

// if (capitalizedTitle[i].includes('-')) {
//   var splitCurrentWord = capitalizedTitle[i].split('');
//   if (splitCurrentWord[i - 1] === '-') {
//     console.log('splitCurrentWord:', splitCurrentWord);
//     var uppercase = splitCurrentWord[i].toUpperCase();
//     console.log('uppercase:', uppercase);
//     splitCurrentWord[i] = uppercase;
//     console.log('splitCurrentWord[i]:', splitCurrentWord[i]);
//   }
//   capitalizedTitle[i] = splitCurrentWord.join('');
// }

// if (capitalizedTitle[i].includes('-')) {
//   var splitCurrentWord = capitalizedTitle[i].split('');
//   for (i = 0; i < splitCurrentWord.length; i++) {
//     if (splitCurrentWord[i - 1] === '-') {
//       var uppercase = splitCurrentWord[i].toUpperCase();
//       splitCurrentWord[i] = uppercase;
//     }
//   }
//   capitalizedTitle[i] = splitCurrentWord.join('');
//   console.log('capitalizedTitle[i]:', capitalizedTitle[i]);
// }
