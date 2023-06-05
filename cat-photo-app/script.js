console.log("Test");

let a = 10 + 5;

const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const powFunction = (a) => a * a;

let result = powFunction(10);
console.log("POW:" + " " + result);

let z = divide(10, 5);

console.log(a);
console.log("Divisão:" + " " + z);

console.log(soma(40, 12));
console.log(minus(40, 12));
console.log(multiply(2, 2));

function soma(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}
