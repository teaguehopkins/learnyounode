var http = require('http');
var arrayArguments = process.argv;
var url = arrayArguments[2];

//console.log(arrayArguments);

http.get(url, function(response){
  //console.log("Got response " + response.statusCode);
  response.setEncoding("utf8");
  response.on("data", function (data){
  console.log(data);
  })

})
