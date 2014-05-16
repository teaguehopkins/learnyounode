//require modules
var http = require('http');
var bl = require('bl');

//global variables
var arrayArguments = process.argv;
var url1 = arrayArguments[2];
var url2 = arrayArguments[3];
var url3 = arrayArguments[4];
var noOfCallbacks = 0;
var dataArray = [2];

//console.log(arrayArguments);

http.get(url1, function(response){
  response.pipe(bl(function(err, data){
    if (err) {
    return console.error(err)
      }
    noOfCallbacks = noOfCallbacks + 1;
    dataArray[0] = data.toString();
    if (noOfCallbacks==3) {
      dataArray.forEach(function(x){
        console.log(x);});
      }
    }))
  });

http.get(url2, function(response){
  response.pipe(bl(function(err, data){
    if (err) {
    return console.error(err)
      }
    noOfCallbacks = noOfCallbacks + 1;
    dataArray[1] = data.toString();
    if (noOfCallbacks==3) {
      dataArray.forEach(function(x){
        console.log(x);});
      }
    }))
  });

http.get(url3, function(response){
  response.pipe(bl(function(err, data){
    if (err) {
    return console.error(err)
      }
    noOfCallbacks = noOfCallbacks + 1;
    dataArray[2] = data.toString();
    if (noOfCallbacks==3) {
      dataArray.forEach(function(x){
        console.log(x);});
      }
    }))
  });
