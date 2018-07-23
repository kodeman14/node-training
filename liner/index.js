var rl = require("./readline");

rl.readLine(process.argv[2], function (line) {
    console.log("read line: %s", line);
});