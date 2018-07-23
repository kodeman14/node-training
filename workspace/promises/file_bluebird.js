var fs = require('fs');
var bluebird = require('bluebird');

var fs = bluebird.promisifyAll(fs);

// function readFileAsync(file) {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(file, function(err, data) {
//             if (err) return reject(err);
//             else resolve(data);
//         });
//     });
// }

var promise = fs.readFileAsync('input.txt');

promise.then(function(data) {
    console.log("data is:" + data);
}).catch(function(err) {
    console.log(err);
});