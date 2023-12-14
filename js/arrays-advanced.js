let array = [1, 2, 3, 4, 5, 9, 5, 3, 7, 0];

// Filtrar somente os números pares
let filtered = array.filter(function (params) {
  if (params % 2 == 0) {
    return true; // é aceito no filtro
  } else {
    return false;
  }
});

// ou...
//let filteredd = array.filter((params) => params % 2 == 0);

console.log(filtered);

// Manipular os dados de um array e gerar um novo array
let mapped = array.map(function (param) {
  return param * 2;
});

//ou...
//let mapped = array.map((params) => params * 2)

console.log(mapped);

// Organizar os dados do vetor
let sorted = array.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

//let sorted = array.sort((a, b) => (a > b ? 1 : -1));

console.log(sorted);

// Soma todos os elementos do vetor
let reduced = array.reduce((total, value) => {
  return total + value;
}, 0);

console.log(reduced);

// Algum dos elementos é maior que 5
let anyBigger = array.some(function (number) {
  if (number > 5) {
    return 1;
  } else {
    return -1;
  }
});

console.log(anyBigger);

// Todos os elementos são maiores que 1
let isBigger = array.every(function (number) {
  return number > 1;
});

console.log(isBigger);

// Procura um elemento no array
let isPresent = array.find(function (number) {
  if (number === 9) {
    return true;
  }
});
console.log(isPresent);

// Retorna a posição de um elemento no array
let arrayTest = [2, 4, 0, 6, 8];
let isPresentPosition = arrayTest.findIndex((number) => number === 0);
console.log(isPresentPosition); // Output will be 2 since 0 is at index 2
