function Account() {
  this._balance = 0;
}

Account.prototype.credit = function (amount) {
  this._balance += amount
};
