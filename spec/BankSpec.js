'user strict';

describe('Account', function() {
  var account;
  beforeEach(function() {
    account = new Account;
  })

  it('starts with a balance of 0', function() {
    expect(account._balance).toBe(0);
  })

  it('can be credited an amount', function() {
    account.credit(500);
    expect(account._balance).toBe(500);
  })

  it('can be debited an amount', function() {
    account.credit(700);
    account.debit(100);
    expect(account._balance).toBe(600);
  })

  it('can display the current balance', function() {
    account.credit(300);
    expect(account.balance()).toBe('Current Balance: £300')
  })

  it('prints out all transactions', function() {
    account.credit(100);
    account.debit(50);
    expect(account.statement()).toBe(
    'date || credit || debt || balance\n05/07/2019 || 100 ||  || 100\n05/07/2019 ||  || 50 || 50'
    );
  })
})
