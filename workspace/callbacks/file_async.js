var fs = require('fs');
var util = require('./util');

fs.readFile('input.txt', function(err, data) {
    if(err) {
        return console.error(err);
    }

    console.log("waiting for 3 sec.....");
    util.pause(3000);

    console.log(data.toString());
});

console.log("this line will get called before file contents are displayed");