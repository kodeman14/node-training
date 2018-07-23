var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

function getAllFiles() {
    return Promise.map(['input1.txt', 'input2.txt'], function(fileName) {
        return fs.readFileAsync(fileName);
    });
}

getAllFiles().then(function(fileArray) {
    console.log("input1:" + fileArray[0]);
    console.log("input2:" + fileArray[1]);
}).catch(function(err) {
    console.log(err);
})