// Vetor com dados do mesmo tipo
// Vetores são objetos

// Métodos de criação de um vetor
const cars = ["Fiat", "Chevrolet", "Peugeot"];

const moreCars = [];
moreCars[0] = "Citroen";
moreCars[1] = "Ford";

const moreMoreCars = new Array("Volvo", "BMW", "Ferrari");

// Printa todo o conteúdo do array
console.log(moreCars);

// Iterando em um array
for (let index = 0; index < cars.length; index++) {
  console.log(cars[index]);
}

// Retorna o tamanho do vetor
console.log(cars.length);

// Retorna o vetor em uma string separada por vírgula
console.log(cars.toString());

// Retorna o vetor em uma string separada por um separador arbitrário
console.log(cars.join(" * "));

const frutas = ["Banana", "Maça", "Laranja"];

// Retira o último elemento do vetor
let frutaRetirada = frutas.pop(); // Retira Laranja
console.log(frutaRetirada);
// Insere um elemento no final do vetor
frutas.push("Limão"); // Insere Limão e retorna o tamanho do novo vetor
console.log(frutas);

// Concatena vetores em um novo vetor
const sumCars = cars.concat(moreCars, moreMoreCars);
console.log(sumCars);

// Insere itens no vetor
// 1 Parametro = Onde serão inseridos os novos itens.
// 2 Parametro = Quantos elementos serão retirados.
// O restante dos parâmetros são os itens a ser adicionados.
// Retorna os valores removidos
frutas.splice(2, 0, "Morango", "Cereja");
console.log(frutas);
// Pode ser utilizado também para remover dados sem deixar buracos no vetor
frutas.splice(0, 1);

// Gera um novo vetor com um pedaço de outro vetor
let frutasFavoritas = frutas.slice(2); // Novo vetor começa depois do índice 2
console.log(frutasFavoritas);
let frutasRuins = frutas.slice(0, 2); //Não seleciona o índice 2
console.log(frutasRuins);
