const leapYears = function(year) {
    let four = year/4;
    let fourHundred = year/400;
    let oneHundred = year/100;

    if (Number.isInteger(four) == true && Number.isInteger(oneHundred) == false) {
        return true;
    } else if (Number.isInteger(fourHundred) == true) {
        return true;
    } else {
        return false;
    }
};

leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);

// Do not edit below this line
module.exports = leapYears;
