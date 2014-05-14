var fs = require('fs');
var arrayArguments = process.argv;
var path = arrayArguments[2];
var ext = arrayArguments[3];
var filteredList = [];

//console.log(ext);

function filter(filename)
{
  //this function takes a filename and if the extension matches global variable 'ext', it pushes the filename to array 'filteredList'
  var array = filename.toString().split(".");
  if (array[1]==ext){filteredList.push(filename);}
  return;
}

fs.readdir(path, function (err, list) {
  if (err) throw err;
  var filenames = list;


filenames.forEach(function(x){filter(x)});
//OR
//filenames.map(function(x){return filter (x);});


filteredList.forEach(function(x){
  console.log(x)}
)
//OR
/*filteredList.map(function(x){
  console.log(x);
  return;});
*/

});
