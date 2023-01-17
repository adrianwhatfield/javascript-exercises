const fibonacci = function(place) {
    if (place < 0) {
        return "OOPS";
    };

    place = parseInt(place);
    
    let a = 0;
    let b = 1;
    let next = 1;

    for (let i = 1; i < place; i++) {
        next = a + b;
        a = b;
        b = next;
    };

    return next;
};

// Do not edit below this line
module.exports = fibonacci;
