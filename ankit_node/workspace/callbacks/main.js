var util = require('./util');
var sum = require('./sum');

sum.sum(5,6, function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log("pausing for 3 secs.....");
        util.pause(3000);

        console.log("the result is:" + data);
    }
});

console.log("this line will get called before sumAsync is called");