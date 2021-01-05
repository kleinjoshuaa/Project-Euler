// Project Euler problem 21

/* 
 Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 
220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. 

The proper divisors of 284 are 1, 2, 4, 71 and 142; so        d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

var max = 10000;

var divisors = [''];
var repeatedVals = [];
for (var i = 1; i < max; i += 1) {
    var sumDivisors = findSumDivisors(i);
    if(findSumDivisors(sumDivisors) == i && findSumDivisors(sumDivisors)!= sumDivisors) {
        divisors.push(sumDivisors);
    }
}

//console.log(divisors);
// so now we have the sum of the divisors of each number
// divisors = divisors.filter(function(v, i, a) {
//     return a.indexOf(v) == i;
// });

console.log(divisors);

console.log(divisors.slice(1).reduce(sumArray, 0));

// find the sum of the divisors of a
function findSumDivisors(a) {
    var i = 1;
    var divisors = [];
    while (i < a) {
        if (a % i == 0) {
            divisors.push(i);
        }
        i += 1;
    }
    return divisors.reduce(sumArray, 0);
}

// find the sum of the array
function sumArray(p, v, i, a) {
    return parseInt(p, 10) + parseInt(v, 10);
}