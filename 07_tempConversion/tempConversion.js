const convertToCelsius = function(num) {
  let result = (num - 32) * (5 / 9);
  result = parseFloat(((result * 10) / 10).toFixed(1));
  return result;
};

const convertToFahrenheit = function(num) {
  let result = num * (9 / 5) + 32;
  result = parseFloat(((result * 10) / 10).toFixed(1));
  return result;
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);
convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
