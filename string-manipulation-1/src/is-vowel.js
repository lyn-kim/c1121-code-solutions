/* exported isVowel */

// check if character is a lowercase vowel (a, e, i, o OR u)
// check if character is an UPPERCASE vowel (A, E, I, O, U)
// say true if it is
// say false if it is not

function isVowel(char) {
  char.toLowerCase();
  if (char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u' ||
      char === 'A' ||
      char === 'E' ||
      char === 'I' ||
      char === 'O' ||
      char === 'U') {
    return true;
  }
  return false;
}
