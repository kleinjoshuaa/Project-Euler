//If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

//If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

var NAMES_U20 = {
    1: 'ONE',
    2: 'TWO',
    3: 'THREE',
    4: 'FOUR',
    5: 'FIVE',
    6: 'SIX',
    7: 'SEVEN',
    8: 'EIGHT',
    9: 'NINE',
    10: 'TEN',
    11: 'ELEVEN',
    12: 'TWELVE',
    13: 'THIRTEEN',
    14: 'FOURTEEN',
    15: 'FIFTEEN',
    16: 'SIXTEEN',
    17: 'SEVENTEEN',
    18: 'EIGHTEEN',
    19: 'NINETEEN'
}

var TENS = {
    2: 'TWENTY',
    3: 'THIRTY',
    4: 'FORTY',
    5: 'FIFTY',
    6: 'SIXTY',
    7: 'SEVENTY',
    8: 'EIGHTY',
    9: 'NINETY'
}

var sumTotal = 0;
for (var i = 1; i < 1001; i += 1) {
    var word = wordify(i);
    console.log(word);

    var numChars = word.split('').filter(function(v) { if (v == ' ') { return false; } else { return true; } }).length;
    console.log('length: ' + numChars)
    sumTotal += numChars;
}
console.log(sumTotal);

function wordify(n) {
    var num = parseInt(n, 10);
    var wasHundred = false;
    var numName = '';
    if (num > 1000) {
        return 'ERROR';
    }
    if (num == 1000) {
        return "one thousand";
    } else {
        num = num.toString().split('');
        if (num.length === 3) {
            var hundreds = num[0];
            numName = NAMES_U20[hundreds] + ' hundred';
            num = num.slice(1);
            var wasHundred = true;
        }
        if (num.length > 1) {
            if (num.join('') == '00') {
                return numName.substr();
            }
            if (wasHundred) {
                numName += " and "
            }
            var tens = num[0];
            //console.log('tens: ' + tens)
            if (tens > 1) {
                var ones = num[1];
                numName += TENS[tens];
                if (ones != 0) {
                    numName += ' ' + NAMES_U20[ones];
                }
            } else {
                var tens = num[0] != 0 ? num[0] + num[1] : num[1];

                numName += NAMES_U20[tens];
            }
        } else {
            numName += NAMES_U20[num.join('')];
        }
    }
    return numName;
}