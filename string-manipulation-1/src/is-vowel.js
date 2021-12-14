/* exported isVowel */

// check if character is a lowercase vowel (a, e, i, o OR u)
// check if character is an UPPERCASE vowel (A, E, I, O, U)
// say true if it is
// say false if it is not

function isVowel(char) {
  var lowercase = char.toLowerCase();
  if (lowercase === 'a' ||
      lowercase === 'e' ||
      lowercase === 'i' ||
      lowercase === 'o' ||
      lowercase === 'u') {
    return true;
  }
  return false;
}
