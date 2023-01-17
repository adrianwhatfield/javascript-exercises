const palindromes = function (text) {
    // Make the whole string just lower case letters
    text = text.replaceAll("!", "");
    text = text.replaceAll(".", "");
    text = text.replaceAll(",", "");
    text = text.replaceAll(" ", "");
    text = text.toLowerCase();


    // Get start and end of text

    let length = text.length;
    let part = ((length - 1) / 2) + 1;

    let start = text.slice(0, part);
    let end = text.slice(-part);

    // Convert end to an array, reverse, then join

    let endArrBack = end.split("");
    let endArr = endArrBack.reverse();

    end  = endArr.join("");

    // Compare the start and end

    if (start == end) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
