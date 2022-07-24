## Background

---

- Define um fundo para nosso elemento.
- Sua área de atuação é a caixa toda.
- Por padrão, é transparente.

### Exemplos

- Usar cores solidas
- Usar imagens
- Controlar
    - a posição das imagens
    - se elas se repetem ou não
    - o tamanho delas na caixa
- Usar cor e imagem juntas
- Usar cor gradiente

# Background Color

---
A propriedade `background-color` define a cor de fundo do elemento selecionado.

``` HTML

<header>

</header>
<main>
    <h1>Evolua rápido com a tecnologia</h1>
    <p>Junte-se a milhares de devs e acelere
    na direção dos seus objetivos</p>
</main>
```

``` CSS

* {
    margin: 0;
}

header {
    height: 100px;
    border: 7px dashed red;
    background-color: rgb(55, 100, 50);
}
```

# Background image

---
- Para adicionar uma imagem como background podemos usar a propriedade `background-image`
- Por padrão a imagem vai se repetir e podemos modificar essa opção usando a propriedade `background-repeat`

``` CSS 

    /* Values */
    background-repeat: repeat-x; -> repetir só no  eixo x
    background-repeat: repeat-y; -> repetir só no  eixo y
    background-repeat: repeat; -> por padrão
    background-repeat: space;
    background-repeat: round;
    background-repeat: no-repeat; -> não repetir a imagem

    /* Podemos usar 2 valores: horizontal | vertical */
    background-repeat: repeat space;
    background-repeat: repeat repeat;
    background-repeat: round space;
    background-repeat: no-repeat round;

```

## Background-position

---

Com a propriedade `background-position` podemos mudar a posição da imagem do background.

``` CSS

    /* Pricipais valores */
    background-position: top;
    background-position: bottom;
    background-position: left;
    background-position: right;
    background-position: center;
    background-position: right center;
```

## Background-size

---
Para mudar o tamanho da imagem do background usamos a propriedade `background-size`.

``` CSS
    /* Values */
    background-size: cover; -> preenchimento, vai tentar preencher tudo.
    background-size: contain; -> Dentro dos limites, centralizada

    /* Podemos usar 2 valores, o primeiro é para a largura da imagem e o segundo é para a altura */
    background-size: 40%; -> O valor é aplicado só para o vertical. O Horizontal é adpatado por sí só.
    background-size: 50% auto; -> por padrão
    background-size: 2em 25%; -> 
    background-size: auto 8px;
    background-size: auto auto;
```

## Background-origin-clip

---
- A propriedade `background-origin` é quem define o ponto de origem de uma imagem específica.

``` CSS
    /* Principais valores */ [consigo manipular bem a imagem]
    background-origin: border-box; -> começa nas extremidades da caixa.
    background-origin: padding-box; -> caso eu queira a partir do padding. não vai levar em consideração o tamanho do padding
    background-origin: content-box; -> Parte do ponto da borda, caso haja. Leva em consideração o preenchimento da borda.
```

- O `background-clip` define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo.

``` CSS
    /* Principais valores */ [vai minupular a cor e a imagem]
    background-clip: border-box; -> padrão
    background-clip: padding-box; -> ele vai eliminar a parte do padding, não levando em consideração.
    background-clip: content-box; -> leva em consideração o padding e só mostra a cor e a imagem após ele.
    background-clip: text;
```

## Background-attachment

---
A propriedade `background-attachment` determina se a posição da imagem vai ser fixa ou se vai rolar junto com o conteúdo.

```CSS
    /* Principais valores */ [se a imagem de fundo do background vai se mover...]
    background-attachment: scroll;
    background-attachment: fixed;
    background-attachment: local;
```


