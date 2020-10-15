// add 50 large numbers and get the first 25 digits
// project euler problem 13 (lucky)
// too easy to do this with BigInt


var bigInt = require("big-integer");
var fs = require('fs')
var fileName = 'numbers.txt';

//var fileName = "test.txt";

// Synchronous read
var data = fs.readFileSync(fileName);
console.log("Synchronous read: " + data.toString());

var numbers = data.toString();
numbers = numbers.split(/,|\n/);

numbers = numbers.filter(function(v, i, r) { if (v == '' || isNaN(v)) { return false; } else { return true; } })

var result = numbers.reduce(add);


console.log(result.toString().substr(0, 10));

// function add(num1, num2, idx) {
//     var result = [];
//     var a1 = num1.split('');
//     var a2 = num2.split('');
//     var maxLen = a1.length > a2.length ? a1.length : a2.length;

//     for (var i = 0; i < maxLen; i += 1) {
//         result[i] = 0

//         result[i] += parseInt(a1[i], 10) + parseInt(a2[i], 10);
//         if (result[i] > 10) {
//             result[i + 1] = 1;
//             result[i] -= 10;
//         }
//     }

//     console.log(idx);
//     return result.join('');
// }

function add(num1, num2) {
    return bigInt(num1).add(num2)
}