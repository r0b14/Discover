# Atribuindo mais estilos às fontes

https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals

---

## font-variant

* variação na apresnetação fonte

```CSS
p {
    font-variant: small-caps; -> todas ficam maiusculas porém ficam com um tamanho menor
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant

---

## font-stretch

* alargamento ou encolhimento da fonte
* aceita palavra-chave como: expanded, condensed, normal.
* aceita porcentagem de 50% a 200%

```CSS 
p {
    font-stretch: expanded;
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch

---

## letter-spacing

* Espaços entre caracteres
```CSS
p {
    letter-spacing: 4px;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing

## word-spacing

* Espaços entre palavras
```CSS
p {
    word-spacing: 4px;
};
```
---
## line-height

* Espaços entre linhas
* Pode ser com unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

```CSS
p {
    line-height: 1.6;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

---

## text-transform

* Transformação do texto

```CSS
p {
    text-transform: uppercase; /* capitalize | lowercase  | none */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform

---
## text-decoration

* Aparência decorativa de um texto
* line: underline | overline | line-through
    * podemos aplicar mais de 1 valor

* style: wavy | dotted | double | dashed | solid
* color: `<color>` values

```CSS
h1 {
	text-decoration: underline; /* shorthand */
}

p {
  text-decoration: wavy overline blue; /* shorthand */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration

---
## text-align

* Alinhamento de um texto
* Valores: start | end | left | right | center | justify | match-parent
``` CSS
p {
	text-align: center;
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/text-align

---
## Text shadow

* Sombra aplicada a um texto
* Permite múltiplos valores

```CSS
p {
  text-shadow: 1px 1px 1px red,
	       2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow

---
## Shorthand

* Podemos usar o shorthand font para determinar os seguintes valores: font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family

```CSS
p {
  font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
```