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

## Espaços entre linhas