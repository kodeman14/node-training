var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

function getFile(index) {
    var filePath = _dirname + "/input" + index + ".txt";
    return fs.readFileAsync(filePath);
}

function getAllFiles() {
    var promises = [];
    for(var i=0; i<=1; i++) {
        promises.push(getFile(i+1));
    }
    return Promise.all(promises);
}

getAllFiles().then(function(fileArray) {
    console.log("input1:" + fileArray[0]);
    console.log("input2:" + fileArray[1]);
}).catch(function(err) {
    console.log(err);
})