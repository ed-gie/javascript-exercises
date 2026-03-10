const convertToCelsius = function(fahrenheit) {
  const result = Number((fahrenheit - 32) * 5/9);
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  const result = Number((celsius * 9/5) + 32);
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

console.log(convertToFahrenheit(73.2));