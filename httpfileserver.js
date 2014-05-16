var http = require('http');
var file = process.argv[3];
var fs = require ('fs');

var server = http.createServer(function (request, response){
  //request handling logic
  res.writeHead(200, { 'content-type': 'text/plain' }) //from the official solution

  fs.createReadStream(file).pipe(response);
  });

server.listen(process.argv[2]);
