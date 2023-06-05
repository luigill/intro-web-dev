# CSS

- CSS (Cascading Style Sheet) é a linguagem que implementa o estilo de um site.
- Suas cores, margens, fontes...
- Pode ser visto como um série de regras em que: Caso um elemento atenda um seletor, certo estilo é usado.
- Precisa do HTML para funcionar.
- Quando duas regras conflitam, o efeito cascata age.
  - Vence o último estilo definido.
  - É feito propriedade a propriedade, então pode-se misturar propriedades de diferentes regras, porém, quando conflitam a última ganha.
  - A maior especificidade(mais de uma classe em uma tag) ganha a corrida também
- O efeito cascata gera herança de tags pai para tags filhas.
- O ideal é sempre estilizar classes.
  -Utiliza .nome-da-classe
  - Para id, utiliza-se #nome-do-id
- ID é um dos mais forte dos seletores.
- Não utilizar uma regra muito específica, com muitas classes e um seletor gigante.
- Pseudo-classe: Aplica o estile somente se a condição for verdadeira.
- Pseudo-elementos: Elementos que antecedem ou sucedem a a tag e que podem ser estilizados.
- Tudo em uma página web é uma caixa retangular.
- Todas as caixas possuem

## PROPRIEDADES CSS:

- padding: Aumenta o espaço entre a borda e o conteúdo de uma caixa.
- margin: Aumenta o espaço entre a borda de uma caixa com a borda de caixas adjascentes.
- border: Adiciona espaço entre a margin e o padding.
