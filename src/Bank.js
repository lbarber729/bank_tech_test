function Account() {
  this._balance = 0;
  this._transactions = ['date || credit || debt || balance']
}

var date = new Date().toLocaleDateString()

Account.prototype.credit = function (amount) {
  this._balance += amount
  this._transactions.push(`${date} || ${amount} ||  || ${this._balance}`);
};

Account.prototype.debit = function (amount) {
  this._balance -= amount
  this._transactions.push(`${date} ||  || ${amount} || ${this._balance}`);
};

Account.prototype.balance = function() {
  return ("Current Balance: £" + this._balance)
};

Account.prototype.statement = function () {
  return this._transactions.join('\n')
};
