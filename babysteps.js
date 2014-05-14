var arrayArguments = process.argv;
var startAt = 2;

var newArray = arrayArguments.slice(2);

var total = newArray.reduce(function(a, b) {
  return Number(a) + Number(b);
});

console.log(total);
