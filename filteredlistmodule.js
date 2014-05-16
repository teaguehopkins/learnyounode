module.exports = function (path, ext, callback) {
var fs = require('fs');
var filteredList = [];

function filter(filename)
{
  //this function takes a filename and if the extension matches global variable 'ext', it pushes the filename to array 'filteredList'
  var array = filename.toString().split(".");
  if (array[1]==ext){filteredList.push(filename);}
  return;
}

fs.readdir(path, function (err, list) {
  if (err) return callback(err);
  var filenames = list;


  filenames.forEach(function(x){filter(x)});

/*
  //Prints out the contents of the filteredList
  filteredList.forEach(function(x){
  console.log("X: " + x)}
  )
*/

  callback(null, filteredList);
});
}
