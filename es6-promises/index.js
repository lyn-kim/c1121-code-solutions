const takeAChance = require('./take-a-chance');

const result = takeAChance('lyn');

result.then(value => {
  console.log(value);
});

result.catch(error => {
  console.log(error.message);
});
