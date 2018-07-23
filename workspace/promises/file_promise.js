var fs = require('fs');

function readFileAsync(file) {
    return new Promise(function(resolve, reject) {
        fs.readFile(file, function(err, data) {
            if (err) return reject(err);
            else resolve(data);
        });
    });
}

var promise = readFileAsync('input.txt');

promise.then(function(data) {
    console.log("data is:" + data);
}).catch(function(err) {
    console.log(err);
});