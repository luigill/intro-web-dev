const sumAll = function (num1, num2) {
  let result = 0;
  let lowerLimit = 0;
  let supLimit = 0;
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  }

  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (num1 <= num2) {
    lowerLimit = num1;
    supLimit = num2;
    // Lower Number First
    for (let index = lowerLimit; index <= supLimit; index++) {
      result += index;
    }
    console.log(result);
  } else {
    lowerLimit = num2;
    supLimit = num1;
    for (let index = supLimit; index >= lowerLimit; index--) {
      result += index;
    }
    console.log(result);
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
