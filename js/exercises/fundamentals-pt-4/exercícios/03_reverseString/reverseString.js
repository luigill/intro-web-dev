const reverseString = function (string) {
  let newString = "";
  //length - 1 = tamanho total - 1 para acesso ao índice final
  //concatena o último elemento na string e diminui o índice no for
  for (let index = string.length - 1; index >= 0; index--) {
    newString += string[index];
  }
  return newString;
};
// Do not edit below this line
module.exports = reverseString;
