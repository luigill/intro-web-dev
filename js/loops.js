// Repetir ações diversas vezes

// Imprime de 0 a 10 no console
// For
// Inicializador; Condição; Expressão
for (let i = 0; i < 11; i++) {
  console.log(i);
}

const cars = ["Fiat", "Peugeot", "Ford"];
// Itera sobre o vetor
for (const car of cars) {
  console.log(car);
}

// Métodos como map e filter podem ser considerados como loops também
function toUpper(string) {
  return string.toUpperCase();
}
const upperCars = cars.map(toUpper);
console.log(upperCars);

// While -> Do While

//Inicializador
let i = 0;
while (i < 11) {
  //Condição
  console.log(i);
  //Expressão
  i++;
}

// Inicializador
let j = 0;
do {
  console.log(j);
  // Expressão
  j++;
  // Condição
} while (j < 11);
// No Do While o código é sempre executado pelo menos uma vez
