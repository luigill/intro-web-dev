function add7(number) {
  return number + 7;
}

console.log(add7(11));

const multiply = (num1, num2) => {
  return num1 * num2;
};

console.log(multiply(10, 5));

function capitalize(string) {
  let restoPalavra = string.slice(1);
  let upper = string.charAt(0).toUpperCase();
  return upper + restoPalavra;
}

console.log(capitalize("lui"));

function lastLetter(string) {
  return string.slice(-1);
}

console.log(lastLetter("Lui"));
