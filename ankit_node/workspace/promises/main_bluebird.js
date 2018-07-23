var sum = require('./sum_bluebird');
var bluebird = require('bluebird');

var sume = bluebird.promisifyAll(sum);
var promise = sum.sumAsync(5,6);

promise.then(function(data) {
    console.log("sum is: " + data);
}).catch(function(err) {
    console.log(err)
})