var bank_acct = require("./bank_acct");
var events = require('events');
var util = require('util');

var acct = new bank_acct.bankAcct();
util.inherits(acct, events.EventEmitter);

acct.on("low_balance", function(currentBal, newBal) {
    console.log('manager - low balance, current balance is:', currentBal);
    console.log('manager - balance will become:', newBal);
});

acct.on("low_balance", function(currentBal, newBal) {
    console.log('customer - low balance, current balance is:', currentBal);
    console.log('customer - balance will become:', newBal);
});

acct.deposit(100);
acct.withdraw(110);