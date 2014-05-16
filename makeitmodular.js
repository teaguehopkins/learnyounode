var mymodule = require('./filteredlistmodule.js')
var arrayArguments = process.argv;
var path = arrayArguments[2];
var ext = arrayArguments[3];
var filteredList = [];

//console.log(ext);
console.log("In Main");
console.log(arrayArguments);

mymodule(path, ext, function(err, data){
  console.log(data);
});
