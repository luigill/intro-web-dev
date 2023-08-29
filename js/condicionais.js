// If - Else

let saldo = 130;
let valorCompras = 120;

if (saldo > valorCompras) {
  console.log("Transação Aceita!");
} else {
  console.log("Não há dinheiro na conta...");
}

let number = 1;

if (number == 0) {
  console.log("Zero");
} else if (number > 0) {
  console.log("Positivo");
} else {
  console.log("Negativo");
}

// Switch Case
let opcao = 3;

switch (opcao) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  default:
    console.log("Error");
    break;
}
