var fs = require('fs');
module.exports.readLine = function(fileName, callback) {
    var input = fs.createReadStream(fileName);
    var textLeft = '';
    input.on('data', function(data) {
        textLeft += data;
        var index = textLeft.indexOf('\n');

        while (index > -1) {
            var line = textLeft.substring(0, index);
            textLeft = textLeft.substring(index + 1);
            callback(line);
            index = textLeft.indexOf('\n');
        }
    });

    input.on('end', function() {
        if (textLeft.length > 0) {
            callback(textLeft);
        }
    });
};