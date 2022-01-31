const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(num => num * 2);
console.log('doubled:', doubled);

// const toDollars = num => {
//   return `$${num.toFixed(2)}`;
// };
// const prices = numbers.map(toDollars);
const prices = numbers.map(num => `$${num.toFixed(2)}`);
console.log('prices:', prices);

// const upperCase = lang => lang.toUpperCase();
// const upperCased = languages.map(upperCase);
const upperCased = languages.map(lang => lang.toUpperCase());
console.log('upperCased:', upperCased);

const firstLetters = languages.map(lang => lang.charAt(0));
console.log('firstLetters:', firstLetters);
