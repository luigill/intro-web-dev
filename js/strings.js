// Strings são sequências de chars;
const frase1 = "Olá mundo!";
console.log(frase1);

// Template é utilizado para se concatenar varáveis
let nome = "Lui";
let frase2 = `Olá ${nome}`;
console.log(frase2);

// Métodos
// Tamanho da String
let tamanhoString = frase1.length;
console.log("Tamanho da string é " + tamanhoString);

//Substring de um certo índice até outro índice
let sliceEx = frase1.slice(0, 3);
//let sliceEx = frase1.slice(3);
console.log(sliceEx);

//Substituir algo dentro da string
let replaceEx = frase1.replace("mundo", "pessoal");
// Substitui todas as ocorrencias
// let replaceEx = frase1.replace(/mundo/g, "pessoal");
console.log(replaceEx);

//Mudança de caixa
let upper = "OLA MUNDO";
let lower = "ola mundo";
console.log(upper.toLowerCase());
console.log(lower.toUpperCase());

//Concatenar strings
let stringConcatenada = upper.concat(" ", lower);
console.log(stringConcatenada);

//Retira espacos em branco
let trimEx = "       HELLO         ";
console.log(trimEx.trim());

//Char em um local especifico na string
console.log(upper.charAt(1));

//Separa a string baseado em um char específico
let splitEx = "banana, kiwi, laranja";
let separado = splitEx.split(",");
console.log(separado);
