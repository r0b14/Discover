# Grid

* Posicionamento dos elementos dentro da caixa
* Posicionamento horizontal e vertical ao mesmo tempo
* Pode ser flexivel ou fixo
* Criar espaços para os elementos filhos habitarem

```CSS
    body {
  margin: 0;
  height: 100vh;
  
  display: grid;
  grid-template-areas:
  "header header"
  "main aside"
  "footer footer";
  
  grid-template-rows: 40px 1fr 40px;
  grid-template-columns: 1fr 180px
}

header {
  grid-area: header;
  background-color: green;
}

main {
  grid-area: main;
  background-color: red;
}

aside {
  grid-area: aside;
  background-color: blue;
}

footer {
  grid-area: footer;
  background-color: gray;
}
```

```html
<body>
  <header>Topo</header>
  <main>Conteúdo</main>
  <aside>Infos Adicionais</aside>
  <footer>Rodapé</footer>
</body>
```