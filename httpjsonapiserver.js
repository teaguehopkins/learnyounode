var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response){
  //request handling logic
  response.writeHead(200, { 'content-type': 'application/json' })

  var parsedURL = url.parse(request.url);
  var isoDate = parsedURL.query.substr(4,parsedURL.query.length) //iso   date string
  var date = new Date(isoDate) //parse using Date constructor

  if (parsedURL.pathname=="/api/parsetime") {
    var dateObject = {"hour":date.getHours(), "minute": date.getMinutes(),"second": date.getSeconds()}
    response.end(JSON.stringify(dateObject));
    }

  if (parsedURL.pathname=="/api/unixtime") {
    response.end(JSON.stringify({"unixtime":date.getTime()}));
  }

  });

server.listen(process.argv[2]);
