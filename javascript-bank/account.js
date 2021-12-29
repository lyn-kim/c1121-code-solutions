/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (typeof amount === 'number' && amount > 0 && Number.isInteger(amount)) {
    var newTransaction = new Transaction('deposit', amount);
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (typeof amount === 'number' && amount > 0 && Number.isInteger(amount)) {
    var newTransaction = new Transaction('withdrawal', amount);
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var deposit = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      // console.log('this.transactions[i]:', this.transactions[i]);
      deposit += this.transactions[i].amount;
    }
  }

  var withdrawal = 0;
  for (i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'withdrawal') {
      withdrawal += this.transactions[i].amount;
    }
  }

  var balance = deposit - withdrawal;
  return balance;
};
