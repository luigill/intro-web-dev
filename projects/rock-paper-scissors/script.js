const possiblePlays = ["pedra", "papel", "tesoura"];

function getComputerChoice(options) {
  let compChoice = options[Math.floor(Math.random() * options.length)];
  return compChoice;
}

function getPlayerChoice() {
  console.log("Digite a sua escolha:");
  console.log("OPÇÕES: pedra, papel ou tesoura.");
  let escolhaJogador = prompt("Digite aqui!");
  return escolhaJogador;
}

function testPlay(option1, option2) {
  //Papel ganha
  if (
    (option1 == "pedra" && option2 == "papel") ||
    (option1 == "papel" && option2 == "pedra")
  ) {
    return "papel";
  }
  //Pedra ganha
  if (
    (option1 == "pedra" && option2 == "tesoura") ||
    (option1 == "tesoura" && option2 == "pedra")
  ) {
    return "pedra";
  }
  //Tesoura ganha
  if (
    (option1 == "tesoura" && option2 == "papel") ||
    (option1 == "papel" && option2 == "tesoura")
  ) {
    return "tesoura";
  }
  //Empate
  if (option1 == option2) {
    return "empate";
  }
}

function play(playerChoice, computerChoice) {
  let winnerPlay = testPlay(playerChoice, computerChoice);
  if (winnerPlay == "empate") {
    console.log("Empate! Ninguém ganhou.");
  } else if (playerChoice == winnerPlay) {
    console.log("Parabéns! Você venceu.");
    console.log(`${playerChoice} ganha de ${computerChoice}`);
  } else {
    console.log("Que pena... Você perdeu.");
    console.log(`${computerChoice} ganha de ${playerChoice}`);
  }
}

function main() {
  let computerChoice = getComputerChoice(possiblePlays);
  let playerChoice = getPlayerChoice(possiblePlays);
  play(playerChoice, computerChoice);
}

for (let index = 0; index < 5; index++) {
  main();
}
