# Shorthand

* Junção de propriedades
* resumido
* Legível

``` css
{
    /* Background properties */
    background-color: #ffffff;
    background-image: url(../images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand */
    background: #000 url(../images/bg.gif) no-repeat left top;

    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: monospace, arial, sans-serif;

    /* font shorthand */
    font: italic bold .8em/1.2 Arial, sans-serif;

}

```

## Detalhes

* Não irá considerar propriedades anteriores
* valores não especificados iraõ assumir o valor padrão
* geralmente, a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhantes, poderemos encontrar problemas.