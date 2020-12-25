// add 50 large numbers and get the first 25 digits
// project euler problem 13 (lucky)
// without bigint



var fs = require('fs')
var fileName = 'numbers.txt';

//var fileName = "test.txt";

// Synchronous read
var data = fs.readFileSync(fileName);
console.log("Synchronous read: " + data.toString());

var numbers = data.toString();
numbers = numbers.split(/,|\n/);

numbers = numbers.filter(function(v, i, r) { if (v == '' || isNaN(v)) { return false; } else { return true; } });
numbers = numbers.map(function(v, i, a) { return parseInt(v.substr(0, 13), 10); });


var result = numbers.reduce(function(v, c, idx, a) { return v + c; });

console.log(result.toString().substr(0, 10));