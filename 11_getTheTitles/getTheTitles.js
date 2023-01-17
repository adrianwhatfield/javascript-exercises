const getTheTitles = function(arr) {
    let list = [];

    for (let i = 0; i < arr.length; i ++) {
        const book = arr[i];
        let title = book.title;

        list.push(title);
    };

    return list;
};

// Do not edit below this line
module.exports = getTheTitles;
