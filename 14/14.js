// 14
// find the logest collatz sequence under 1 million



console.log(collatz(13));

var maxLen = 0;
var maxNum = 0;
var seqLen;

for (var i = 1; i < 1000000; i += 1) {
    seqLen = collatz(i);
    if (seqLen > maxLen) {
        maxLen = seqLen;
        maxNum = i;
    }


}


console.log('Max Sequence Length: ' + maxLen);
console.log('Number: ' + maxNum);

function collatz(n) {
    var num = n;
    var steps = 1;
    while (num != 1) {
        if (num % 2 == 0) {
            num /= 2;
        } else {
            num *= 3;
            num += 1;
        }
        steps += 1;

    }
    return steps
}