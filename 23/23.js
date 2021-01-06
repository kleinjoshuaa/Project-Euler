/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, 
which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n 
and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, 
the smallest number that can be written as the sum of two abundant numbers is 24. 

By mathematical analysis, it can be shown that all integers greater than 28123 
can be written as the sum of two abundant numbers. 

However, this upper limit cannot be reduced any further by analysis 
even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers 
is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

var max = 28123;

var abundantNumbers = [12];

while(abundantNumbers[abundantNumbers.length-1] < max) {
    var nextAbundantNumber = abundantNumbers[abundantNumbers.length-1];
    nextAbundantNumber += 1;
    //console.log(findSumDivisors(nextAbundantNumber))
    while(findSumDivisors(nextAbundantNumber) <= nextAbundantNumber) {
        nextAbundantNumber++;
    }
    abundantNumbers.push(nextAbundantNumber);
}
var sums = [];
console.log(abundantNumbers.length+' abundant numbers found')
for(var i = 0; i < abundantNumbers.length; i += 1) {
    for(var j = 0; j < abundantNumbers.length; j += 1){
        sums.push(abundantNumbers[i]+abundantNumbers[j]);

    }
}
console.log('filtering '+sums.length+' summations of abundant numbers');
sums = uniqueArray(sums);
console.log(sums.length+' unique sums of abundant numbers')
var nonAbundantNumParts = [];
for (var k = 0; k < max; k += 1) {
    if(sums.indexOf(k) == -1) {
        nonAbundantNumParts.push(k);
    }
}
console.log(nonAbundantNumParts.length+'  non abundant numbers');

console.log(nonAbundantNumParts.reduce(sumArray, 0));

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

function uniqueArray( a ) {
    var j = {};
  
    a.forEach( function(v) {
      j[v+ '::' + typeof v] = v;
    });
  
    return Object.keys(j).map(function(v){
      return j[v];
    });
  } 