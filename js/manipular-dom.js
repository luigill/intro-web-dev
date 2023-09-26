// DOM -> Document Object Model
// Representação em formato de árvore do conteúdo de uma página web
// Uma árvore de nodos com diferentes relacionamentos entre si dependendo de como o HTML está estruturado
// Nodos possuem métodos que podem ser utilizados.
// element.querySelector(selector) -> Seleciona a primeira instância de um seletor
// element.querySelectorAll(selector) -> Retorna uma nodelist que contém todos os matches de selectors

// Exemplo que está sendo acessado
/*
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
*/

// Seleciona o #container
const container = document.querySelector("#container");

// Seleciona o primeiro filho de container -> .display
console.dir(container.firstElementChild);

// Seleciona o .controls
const controls = document.querySelector(".controls");

// Seleciona o parente anterior -> .display
console.dir(controls.previousElementSibling);

// Cria um elemento -> Aloca na memória
const div = document.createElement("div");

// Inserir elementos na DOM
// parentNode.appendChild(childNode) -> insere childNode no último elemento de parentNode
// parentNode.insertBefore(newNode, referenceNode) -> Insere o newNode em parentNode antes de referenceNode

// Remover elementos da DOM
// parentNode.removeChild(child) -> remove child de parentNode na DOM e retorna uma referência para child

// Cria uma referência para uma div
const divTest = document.createElement("div");
// Mudanças realizadas na tag:
divTest.style.color = "blue";
divTest.style.cssText = "color: blue; background:white;";
// Adiciona diversos atributos:
divTest.setAttribute("style", "color:blue; background:white");

// Se id existe, o atualiza para theDiv, senão cria um id com o valor theDiv
divTest.setAttribute("id", "theDiv");

// Retorna o valor de um atributo em específico
divTest.getAttribute("id");

// Remove um atributo em específico
divTest.removeAttribute("id");

// Adiciona uma nova classe para a nova div
divTest.classList.add("new");

// Remova a classe da div
divTest.classList.remove("new");

// Se div não possui a classe active então adiciona, senão remove
divTest.classList.toggle("active");

// Cria um node texto contendo "Hello World" e o insere na div
div.textContent = "Hello World";

// Renderiza o HTML dentro da div -> Pode gerar problemas de segurança se usado de maneira errada
divTest.innerHTML = "<span>Hello World!</span>";

// Métodos de criar eventos dentro do JS
