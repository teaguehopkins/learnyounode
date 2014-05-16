module.exports = function (args) { /* ... */ }

var fs = require('fs');
var arrayArguments = process.argv;
var path = arrayArguments[0];
var ext = arrayArguments[1];
var filteredList = [];

console.log("In Module");
console.log(arrayArguments);

function filter(filename)
{
  //Takes a filename and if the extension matches global variable 'ext', it pushes the filename to array 'filteredList'
  var array = filename.toString().split(".");
  if (array[1]==ext){filteredList.push(filename);}
  return;
}

//Takes a file path as input and calls back with an array of filenames found at that path.
fs.readdir(path, function (err, list) {
  if (err) {
    //handle error
    console.log(err);
    }

  var filenames = list;


//module print section for debugging before the callback
  filenames.forEach(function(x){filter(x)});
  console.log("Module Print");
  filteredList.forEach(function(x){
    console.log(x);


    callback(null, x)}
  )

  });
