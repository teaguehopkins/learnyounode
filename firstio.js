var fs = require('fs');
var arrayArguments = process.argv;
var fileToRead = arrayArguments[2];

var buffer = fs.readFileSync(fileToRead);

var string = buffer.toString();


var array = string.split("\n");

//test file does not have a newline character ('\n') at the end of the last line so off by 1
console.log(array.length-1);
