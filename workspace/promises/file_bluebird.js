var fs = require('fs');
var bluebird = require('bluebird');

var fs = bluebird.promisifyAll(fs);

var promise = fs.readFileAsync('input.txt');

promise.then(function(data) {
    console.log("data is:" + data);
}).catch(function(err) {
    console.log(err);
});