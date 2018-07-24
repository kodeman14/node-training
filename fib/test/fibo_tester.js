var fib = require("../../fib");
var chai = require("chai");

describe('main test suite', function() {
    it('edge case 1', function() {
        chai.assert.equal(fib.calculate(1), 1, "should be 1");
    });
    it('edge case 2', function() {
        chai.assert.equal(fib.calculate(2), 1, "should be 1");
    });
    it('regular case', function() {
        chai.assert.equal(fib.calculate(10), 55, "should be 55");
    });
});