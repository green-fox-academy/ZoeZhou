'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
function nameAndBalance(accounts){
  var lists = accounts.map(function(value,index){
    var obj = {};
    obj.client_name = value.client_name;
    obj.balance = value.balance;
    return obj;
  })
  return lists;
}
function transferBalance(formAccountNumber, toAccountNumber, balance){
  var formAccount,
      toAccount;
  for(var i in accounts){
    if(accounts[i].account_number === formAccountNumber){
      formAccount = accounts[i];
    }
    if(accounts[i].account_number === toAccountNumber){
      toAccount = accounts[i];
    }
  }
  formAccount.balance -= balance;
  toAccount.balance += balance;
  return "transfer " + balance + " form " + formAccount.client_name + " to " + toAccount.client_name;
}
console.log(nameAndBalance(accounts));
console.log("before transfer:" + accounts[0].balance + "  " + accounts[1].balance);
console.log(transferBalance(11234543,43546731,1000));
console.log("after transfer:" + accounts[0].balance + "  " + accounts[1].balance);
