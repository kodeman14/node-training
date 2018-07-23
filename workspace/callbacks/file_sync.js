var fs = require('fs');
var util = require('./util');

try {
    var data = fs.readFileSync('input.txt');
    console.log("waiting for 3 sec.....");
    util.pause(3000);
    console.log(data.toString());
} catch(err) {
    console.log(err);
}

console.log("this line will get called after file contents are displayed");