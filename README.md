# Bank Tech Test

Acceptance criteria
- Given a client makes a deposit of 1000 on 10-01-2012
- And a deposit of 2000 on 13-01-2012
- And a withdrawal of 500 on 14-01-2012
- When they print their balance
- They would see
```
Current Balance: £2500
```
- When she prints her bank statement
- Then she would see
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### How to use
- Clone this repo to your machine
```
git clone https://github.com/lbarber729/bank_tech_test.git
```
- Run ```bundle install```
- Use through the command line, run
```
node
.load ./src/Bank.js
account = new Account;
```
- To exit, run ```.exit```

## How to run tests
- Open SpecRunner.html in your browser to run the tests

## User Stories

```
As a customer
When I open an Account  
I want my balance to start at  0
```
Object | Message
-|-
Customer |
Account | Balance of 0

```
As a customer
So I can keep my money somewhere
I want to be able to credit my account
```
Object | Message
-|-
Customer |
Account | Credit
```
As a Customer
So I can spend money from my account
I want to be able to debit my account
```
Object | Message
-|-
Customer |
Account | Debit
```
As a Customer
So I know how much I have in my account
I want to be able to see my current balance
```
Object | Message
-|-
Customer |
Account | Balance

```
As a Customer
So that only I can track my spending
I want to be able to see my account statement
```
Object | Message
-|-
Customer |
Account | Statement


## Status
-
