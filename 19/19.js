// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

var startDate = new Date(1901, 0, 1);
var endDate = new Date(2000, 11, 31);

var dateToCheck = startDate;
var count = 0;
while (dateToCheck < endDate) {
    if (dateToCheck.getDay() == 0) {
        count += 1;
    }

    console.log({ count: count, dateToCheck: dateToCheck, day: dateToCheck.getDay() });
    var newMonth = dateToCheck.getMonth() < 11 ? dateToCheck.getMonth() + 1 : 0;
    var newYear = newMonth == 0 ? dateToCheck.getFullYear() + 1 : dateToCheck.getFullYear();
    dateToCheck.setMonth(newMonth);
    dateToCheck.setFullYear(newYear);

}
console.log(count);