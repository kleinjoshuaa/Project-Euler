// What is the sum of the digits of the number 2^1000?

var num = BigInt(2) ** BigInt(1000);

console.log(num.toString().split('').reduce(function(a, i) { return parseInt(a, 10) + parseInt(i, 10); }));