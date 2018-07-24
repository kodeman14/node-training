var http = require('http');
var morgan = require ('morgan');
var fs = require('fs');
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
var logger = morgan('combined', {stream: accessLogStream});
//other parameters for logger : common, dev, short

var port = 12345;
 
http.createServer(function(req, res){
  var timeIn = new Date();
  var timeStamp = timeIn.getHours() + ":" + timeIn.getMinutes() + ":" + timeIn.getSeconds() + "." + timeIn.getMilliseconds();timeIn.getMinutes() + ":" + timeIn.getSeconds() + "." + timeIn.getMilliseconds();
  var logMsg = timeStamp + ' Received HTTP request: [' + req.method + '] [' + req.url + ']'; 
  console.log(logMsg);
  
  logger(req, res, function (err) {} );
        
  res.setHeader('content-type', 'text/plain')
  res.end(logMsg);
}).listen(port, function(){
  console.log('The server is listening on port ' + port + ' ...');
});