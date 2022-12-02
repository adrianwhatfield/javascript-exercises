const repeatString = function(string, num) {
    let newString = ""

    if (num < 0) {
        return "ERROR";
    }
    while (num > 0) {
        newString += string;
        num--;
    }
    return newString;
};

const number = Math.floor(Math.random() * 1000)

repeatString("hey", 3);
repeatString("hey", 10);
repeatString("hey", 1);
repeatString("hey", 0);
repeatString("hey", -1);
repeatString("hey", number);
repeatString("", 3);

// Do not edit below this line
module.exports = repeatString;
