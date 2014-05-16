//require modules
var http = require('http');
var bl = require('bl');

//global variables
var arrayArguments = process.argv;
var url = arrayArguments[2];

//console.log(arrayArguments);

http.get(url, function(response){
  response.pipe(bl(function(err, data){
    if (err) {
    return console.error(err)
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
    }))
  });
