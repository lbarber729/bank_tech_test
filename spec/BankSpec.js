'user strict';

describe('Account', function() {
  var account;
  beforeEach(function() {
    account = new Account;
  })

  it('starts with a balance of 0', function() {
    expect(account._balance).toBe(0);
  })
})
