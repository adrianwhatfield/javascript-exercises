const sumAll = function(one, two) {
    if (typeof one != "number" || typeof two != "number") {
        return "ERROR";
    } else if (one < 0 || two < 0) {
        return "ERROR"; 
    } else if (one > two) {
        let newOne = two;
        let newTwo = one;

        let i = newOne;
        let sum = 0;
        sum = sum + i;

        do {
            i += 1;
            sum = sum + i;
        } while (i < newTwo)

        return sum;
    } else {
        let i = one;
        let sum = 0;
        sum = sum + i;

        do {
            i += 1;
            sum = sum + i;
        } while (i < two)

        return sum;
    }
};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
