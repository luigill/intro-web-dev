const convertToCelsius = function (temperature) {
  let result = 0;
  result = (temperature - 32) * (5 / 9);
  let aproxResult = Math.round(result * 10) / 10;
  return aproxResult;
};

const convertToFahrenheit = function (temperature) {
  let result = 0;
  result = temperature * (9 / 5) + 32;
  let aproxResult = Math.round(result * 10) / 10;
  return aproxResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
