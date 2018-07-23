var events = require('events');
var util = require('util');

var bankAcct = function bankAcct() {
    var balance = 0;
    //this.eventEmitter = new events.EventEmitter();
    this.setMaxListeners(1);
    this.deposit = function(amount) {
        balance += amount;
    };
    this.withdraw = function(amount) {
        var newBal = balance - amount;
        if(newBal < 0) {
            this.emit("low_balance", balance, newBal);
        } else balance -= amount;
    };
};

util.inherits(bankAcct, events.EventEmitter);

module.exports.bankAcct = bankAcct;