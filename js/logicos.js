let x = 2;
let y = -3;

// And -> Ambas são verdadeiras
if (x > 0 && y > 0) {
  console.log("Os dois valores são positivos");
}

// Or -> Somente uma é verdadeira
if (x > 0 || y > 0) {
  console.log("Um dos valores é positivos");
}

// Negação
let z = false;

if (!z) {
  console.log("Z é falso.");
} else {
  console.log("Z é verdadeiro.");
}
