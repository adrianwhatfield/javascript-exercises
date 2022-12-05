const reverseString = function(string) {
    let arr = string.split("")
    let newArr = arr.reverse()
    return newArr.join("")
};

reverseString("hello")
reverseString("hello there")
reverseString("123! abc!")
reverseString("")

// Do not edit below this line
module.exports = reverseString;
