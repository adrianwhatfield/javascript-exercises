const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(num) {
  if (num.length === 0) {
    return 0;
  } else {
    return num.reduce(sumArr);

    function sumArr(total, num) {
      return total + num;
    }
  }
};

const multiply = function(num) {
  return num.reduce(multiplyArr);

  function multiplyArr(total, num) {
    return total * num;
  }
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let result = 1;

	if (a == 0) {
    return 1;
  } else {
    for (let i = 2; i <= a; i++) {
      result = result * i;
    };
  };

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
