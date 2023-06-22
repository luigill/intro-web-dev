# CSS

- CSS (Cascading Style Sheet) é a linguagem que implementa o estilo de um site.
- Suas cores, margens, fontes...
- Pode ser visto como um série de regras em que: Caso um elemento atenda um seletor, certo estilo é usado.
- Precisa do HTML para funcionar.
- Quando duas regras conflitam, o efeito cascata age.
  - Vence o último estilo definido.
  - É feito propriedade a propriedade, então pode-se misturar propriedades de diferentes regras, porém, quando conflitam a última ganha.
  - A maior especificidade ganha a corrida também.
  - PONTUAÇÃO
    - Seletores de Tipo   | Valor: 1    | Exemplo: img
    - Seletores de Classe | Valor: 10   | Exemplo: .btn
    - Seletores de ID     | Valor: 100  | Exemplo: #container
    - Seletores Inline    | Valor: 1000 | Exemplo: Estilizar tags diretamente no HTML.
- O efeito cascata gera herança de tags pai para tags filhas.
- O ideal é sempre estilizar classes.
- IDs são mais utilizados para manipulações usando JavaScript.
  - Utiliza .nome-da-classe
  - Para id, utiliza-se #nome-do-id
- ID é um dos mais forte dos seletores.
- Seletores que compartilham regras podem ser agrupados:
  ```
  .read,
  .unread {
    color: white;
    background-color: black;
  }
  ```
- Não utilizar uma regra muito específica, com muitas classes e um seletor gigante.
- De qualquer maneira, pode-se tornar a regra mais específica utilizando mais de uma classe no elemento.
  ```
  .recipe-card.feature{
    border: 2px solid darkred
  }
  ```
- Para acessar tags filhas, utiliza-se:
  ```
  .recipe-card h2{
    border: 2px solid darkred
  }
  ```
- Dessa forma, acessa-se somente os h2 que estão dentro dos elementos que tem a classe recipe-card.
- Pseudo-classe: Aplica o estile somente se a condição for verdadeira.
- Pseudo-elementos: Elementos que antecedem ou sucedem a a tag e que podem ser estilizados.
- Tudo em uma página web é uma caixa retangular.

## Importar CSS:

```
 <link rel="stylesheet" href="style.css" />
```

## Prioridade CSS

1. !important
2. in-line
3. ID
4. Class

## Seletores CSS

- \*: Seletor universal. Seleciona todos os elementos.
- Tipos: Seleciona tags HTML de determinado tipo.
- Classe: Seleciona as tags HTML que contém a classe determinada.
- ID: Seleciona a tag HTML única que contém determinado ID.

## Propriedades CSS:

- padding: Aumenta o espaço entre a borda e o conteúdo de uma caixa.
- margin: Aumenta o espaço entre a borda de uma caixa com a borda de caixas adjascentes.
- border: Adiciona espaço entre a margin e o padding.
- line-height: Altura da linha. Ajusta o espaçamento das linhas.
- font-family: Modifica a fonte utilizada.
- font-size: Tamanho da fonte.
- font-weight: Modifica o peso da fonte. Pode-se transformar o texto em negrito.
- height: Altura do componente. Para não se perder proporção, deixa-se em auto e modifica-se o width.
- width: Largura do componente.
- list-style: Estilização de listas.
- color: Cor do texto do elemento.
- background-color: Cor de fundo do elemento.
- text-align: Alinhamento do texto.
- text-decoration: Modifica opções de estilo do texto.
- boarder: Funciona como uma borda de uma pintura. Realiza uma marcação por toda a volta do elemento.
