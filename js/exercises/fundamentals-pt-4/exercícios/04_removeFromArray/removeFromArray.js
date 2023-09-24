const removeFromArray = function (array, ...args) {
  // Cria-se um novo array
  let newArray = [];
  // Para cada elemento do array...
  array.forEach((element) => {
    // ...compara-se se ele está presente nos argumentos passados, e se ele não estiver...
    if (!args.includes(element)) {
      // ... o elemento é inserido no novo array.
      newArray.push(element);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
