const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const addNums = (num1, num2) => {
  return num1 + num2;
};
const sum = numbers.reduce(addNums);
console.log('sum:', sum);

const multiplyNums = (num1, num2) => {
  return num1 * num2;
};
const product = numbers.reduce(multiplyNums);
console.log('product:', product);

const transactionReducer = (currentTotal, transaction) => {
  if (transaction.type === 'deposit') {
    return currentTotal + transaction.amount;
  } else if (transaction.type === 'withdrawal') {
    return currentTotal - transaction.amount;
  }
};

const balance = account.reduce(transactionReducer, 0);
console.log('balance:', balance);

const composite = traits.reduce((composite, trait) => {
  return Object.assign(composite, trait);
}, {});

// const pair = (trait1, trait2) => {
//   return Object.assign({}, trait1, trait2);
// };
// const composite = traits.reduce(pair);
console.log('composite:', composite);
