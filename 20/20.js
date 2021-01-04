// Find the sum of the digits in the number 100!

function factorialize(num) {
    if (num === 0 || num === 1)
        return BigInt(1);
    for (var i = num - BigInt(1); BigInt(i) >= 1; i = BigInt(i) - BigInt(1)) {
        num *= BigInt(i);
    }
    return BigInt(num);
}

var n = factorialize(BigInt(100));

var result = n.toString().split('').map(
    function(v, i, a) {
        return parseInt(v, 10);
    }).reduce(
    function(p, v, i, a) {
        return (p + v);
    }, 0);

console.log(result);