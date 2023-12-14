// Objetos
// São uma coleção de pares chave-valor

// Método 1 para criação de objetos
const exampleObject = {
  nome: "lui",
  idade: 23,
  profissao: "estudante",
};

// Método 2 para criação de objetos
const otherObject = new Object();

console.log(exampleObject);
console.log(exampleObject.nome);
console.log(exampleObject.idade);
console.log(exampleObject.profissao);

// Adicionando novos campos no objeto
exampleObject.isAdmin = true;
console.log(exampleObject);

// Removendo campo de objeto
delete exampleObject.isAdmin;
console.log(exampleObject);

// Exemplo mais próximo do mundo real:
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let usuario = makeUser("Lui", 23);
console.log(usuario);
