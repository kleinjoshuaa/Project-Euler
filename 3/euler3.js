// Problem 3 of Project Euler
// Written for The Odin Project
// (c) 2015 Joshua Klein
// What is the largest prime factor of the number 600851475143 ?
var num = 600851475143;
//var  num= 13195;


var sqrt = Math.sqrt(num);
var j = 0;
var i, k, m, fac, facr;
var factors = [];
print("Square root of " + num + " is " + sqrt);

function factorial(n) {
    var q = n;
    var ret = 1;
    while ((q - 1) > 0) {
        ret *= q;
        q -= 1;
    }
    return ret;
}

for (i = 1; i < sqrt; i += 1) {
    if (num % i === 0) {
        factors[j] = i;
        j += 1;
    }
}
for (k = 0; k < j; k += 1) {
    print("Checking primality of " + factors[k]);
    if (factors[k] % 6 === 1 || factors[k] % 6 === 5) {
        //print(factors[k]+" is of the form 6k+-1, checking primality");
        fac = factors[k];
        facr = Math.floor(Math.ceil(Math.sqrt(fac)));
      //  print("checking integers up to " + facr);
        for (m = 2; m < facr; m += 1) {
            // print("checking "+m);
            if (fac % m === 0) {
               // print(m + " divides factor " + fac + ", so " + fac + " is not a prime factor");
                   var b = 0;
                break;
            } 
        }
        if (typeof b === 'undefined') {
            print(fac + " is prime");
        }
    } else {
        print("fails to be of the form 6k +1 or -1, not prime");
    }
}