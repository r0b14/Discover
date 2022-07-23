# Selectors

Conecta um elemento HTML com o CSS

## Tipos

Global Selector `*`
Element/Type Selector `h1, h2, h3, h4, p, div`
ID Selector `#box, #container` -> usado para elementos úncios
Class Selector `.red, .m-4`
Attribute Selector, Pseudo-class, Pseudo-element e outros.

``` html
<h1> Titulo da Página </h1>
<h3> Olá Mundo! </h3>

<div id="container" class="m-33">
  <h2> Aplicada a div 1</h2>
  <h3> Subtitulo </h3>
</div>
```

```css

  * {
  margin: 0;
}

#container {
  width: 200px;
  background: purple;
}

.m-33 {
  margin: 40px;
}

h1 {
    /* Declaration */
    color: red;
    font-size: 60px;
    background: gray;
}

```