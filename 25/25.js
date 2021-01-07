/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/
var sqrt5 =  Math.sqrt(5);
var phi = (1 + sqrt5)/2;
function fib(n, phi, sqrt5) {
  //var asymp = Math.pow(phi, n) /sqrt5;
  //var result = (Math.round(asymp));
  return Math.ceil(((n*Math.log10(phi)) - ((Math.log10(5))/2)));
}

var i = 1;
while(fib(i, phi, sqrt5)< 1000) {

   // console.log('index = '+i);
   // console.log('result: '+fib(i, phi, sqrt5));
    i +=1;
}
console.log('answer: '+i);
