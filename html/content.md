# HTML

- HTML e CSS as duas linguagens que funcionam em conjunto para criar o que é visto na Internet.
- HTML (Hypertext Markup Language) define a estrutura e conteúdo da página.
- Pode ser visto como o conteúdo da página.
  - Elementos - Pedaços de conteúdo com uma tag de abertura e fechamento.
    - Podem ser vistos como um container para conteúdo.
  - Tag - Comunicam o navegador onde um elemento HTML começa e termina.
  ```
  <div> Elemento HTML </div>
  ```
  - Algumas tags não precisam de fechamento, como img.
  - É importante usar as tags certas para os conteúdos, pois tem-se um grande impacto na acessibilidade do site e o quão bem ele é rankeado nas search engines.
- CSS (Cascading Stylesheet) é o estilo que vai nessa informação.
- A indentação de tags HTML cria uma relação de pai e filho, que será explorada com CSS e JS.
- Listas sempre serão utilizadas em algum momento, seja para ordenar Top 10 ou To Do.
- Tags podem ter atributos que modificam o seu comportamento.
  - Comportamento Chave:Valor
- Links são formas de acessos para diferentes páginas Web.
  - Links Absolutos levam para outros Websites na Internet. Sempre conterá o protocolo e o domínio destino.
  - Links Relativos levam para outras páginas dentro do Website corrente.
- Class é um atributo que diferencia tags e específica certos comportamentos no CSS e JS.
- IDs são identificações únicas para tags.
- No quesito de organização do HTML, mantem-se perto elementos semelhantes.
  - Ex: Post em rede social, mantem-se nome de usuário, data, foto e legenda agrupados em uma div post.

## Tags HTML

- html = Elemento raíz.
- head = Onde vai os metadados da página.
- meta = Metadados.
  - charset = "UTF-8" = Conjunto de chars usados na página.
  - name ="viewport" content="width=device-width, initial-scale=1.0" = Utilizado para páginas mobile. Diz para o browser que a mudança de escala será feita pelo próprio programador.
- title = Título da página
- body = Onde serão inseridos os elementos.
- h1-h6 = Variações de títulos.
- p = Parágrafo de texto.
- strong = Palavra em negrito.
- em = Palavra em itálico.
- ul = Lista desordenada.
- ol = Lista ordenada.
- li = Elementos dentro de listas.
- a = Âncoras. Links para outras páginas ou websites.
  - href = Refência para onde o link está indo.
- div = Funciona como uma caixa, em que o que importa é o conteúdo da caixa. Agrupa-se em uma div elementos com comportamentos parecidos.
- span = Uma caixa para pequenos pedaços de texto
- button = Botão.
- img = Carrega uma imagem na página.
  - src = Caminho de onde está armazenada a imagem.
- input = Método de entrada do usuário no navegador. Possui diferentes tipos de entradas.
- textarea = Área dedicada para texto do usuário. Pode-se utilizar quebra de linhas.
- select = Seleção entre opções em dropdown.
- form = Formulário para input.
- table = Inicialização de tabela.
- thead = Cabeçalho da tabela.
- tbody = Corpo da tabela.
- tr = Linhas da tabela.
- td = Célula da tabela.
- br = Quebra de linha. Não mais utilizado.
- style = Chamada CSS dentro do HTML.
- nav = Similar a div, traz especificidade a uma barra de navegação.
