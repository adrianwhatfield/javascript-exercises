const removeFromArray = function(... args) {
    const arr = args[0]
    const newArr = []

    arr.forEach((item) => {
        if (!args.includes(item)) {
          newArr.push(item);
        }
    });

    return newArr;
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);
// find a way to deal with multiple args and a way so that they don't interfere with each other
// so you can remove one if needed or multiple if needed

// Do not edit below this line
module.exports = removeFromArray;
