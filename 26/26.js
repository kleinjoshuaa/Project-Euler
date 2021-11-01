
/*
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

Well, the answer was in the 

*/


var  i = 1;
var answer = {'number': 0,
                'series': '', 
               'length':0 };
while (i < 1000){
    var series = divide(1,i, 5*i );
    var  len = series.length;
    for (var j = 0; j < len; j += 1) {
        
    if (len%j==0) {
        console.log(series.substring(0,j).repeat(len/j));
        if (series==series.substr(0,j).repeat(len/j)) {
            console.log('---'+series.substr(0,j));
            if ( series.substr(0,j) > answer.length) {
                answer.length = series.substr(0,j).length;
                answer.number = i;
                answer.series = series.substr(0,j);
            };
        }
    }
    }
    i += 1;
}
console.log(JSON.stringify(answer));


 function divide( x, y,  prec) {
    if (y == 0) return NaN;
    var quot = 0, sign = 1;
    if (x < 0) {
        sign = 0 - sign;
        x = 0 - x;
    }
    if (y < 0) {
        sign = 0 - sign;
        y = 0 - y;
    }
    while (x >= y) {
        x -= y;
        quot = 0 - (0 - 1 - quot);
    }
    quot = (sign < 0 ? "-" : "").concat(quot, prec == undefined && x > 0 ? "." : "");
    if (x > 0) {
        prec = prec || 13;
        if (--prec) {
            for (var i = 9, temp = x; i; i--) x = 0 - (0 - x - temp);
            quot = quot.concat(divide(x, y, prec));
        }
    }
    return (quot);
}