/**
 * Euler discovered the remarkable quadratic formula:

Problem 27

It turns out that the formula will produce 40 primes for the consecutive integer values . However, when  is divisible by 41, and certainly when  is clearly divisible by 41.

The incredible formula  was discovered, which produces 80 primes for the consecutive values . The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

, where  and 

where  is the modulus/absolute value of 
e.g.  and 
Find the product of the coefficients,  and , for the quadratic expression that produces the maximum number of primes for consecutive values of , starting with .
 */
var answer = {a: 0, b: 0, product: 0};
var 
for (var a = -1000; a < 1001; a +=1; ) {
    for (var b = -1000; b < 1001; b += 1) {

    }
}

function isPrime(number)
{ 
  if (number <= 1)
  return false;

  // The check for the number 2 and 3
  if (number <= 3)
  return true;

  if (number%2 == 0 || number%3 == 0)
  return false;

  for (var i=5; i*i<=number; i=i+6)
  {
     if (number%i == 0 || number%(i+2) == 0)
     return false;
  }

  return true;
}