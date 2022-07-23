# Introdução

## O que significa CSS?

- Cascading Style Sheet;
- Código para criar estilos no HTML; - HTML é toda a estrutura.
- HTML é a estrutura, e o CSS é a beleza;
- Não é uma linguagem de programação;
- É uma linguagem *style sheel*;

https://codepen.io/ -> site que ajuda a entender CSS.

## Comentários CSS

- Não irá  afetar o seu código
- Ajuda a lembrar blocos de códigos;
- Deixa dicas para leitura;
- Ajuda outros a entenderem;
- Nunca esqueça de fechar um comentário aberto

Comentários começam com `/*`e terminam com `*/`

```css

/* Basico */

p {
    color: red;
}

div p + p {
    padding: 1em;
}

```

## Anatomia do CSS

```css

/* Selector */
h1 {

    /* Declaration */
    color: red;
    font-size: 60px;
    background: gray;
}
```

* Selector -> h1, h2, h3, h4, ids, class's, attributes...
* Declaration -> properties + properties values. tudo dentrod a chaves
* Properties -> color, font, font-size, font-weight, background...
* Property Value -> red, green, blue, alpha, 60px, 1em...