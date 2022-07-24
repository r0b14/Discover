# Border ( e outline)

São as bordas da caixa.
Os valores inseridos para as bordas são somados juntos a valor do elemento.
Exemplo: temos uma 'caixa' perfeita. width = 100px e height = 100px. Se inserirmos
uma boder de 10px o valor do elemento será 100 + 10...

Podemos ajustar isso usando o `<box-sizing: border-box>`

- value: <border-style> | <border-width> | <border-color>
- style: solid | dotted | dashed | double | groove | ridge | inset | outset
- width: <length>
- color: <color>

```css

div {
	/* shorthand */
	border-top: solid 2px; /* top | right | bottom | left */

	/* style */
	border: solid;

	/* width <length> | style */
	border: 2px dotted;

	/* style | color */
	border: outset #f33;

	/* width | style | color */
	border: medium dashed green;
}
```

### E o outline?

O outline é muito semelhante ao border, mas difere em 4 sentidos:

- Não modifica o tamanho da caixa, pois não é parte do Box Model
- Poderá ser diferente de retangular
- Não permite ajuste individuais 
- Mais usado pelo user agent para acessibilidade

--- ganhando o primeiro commit do dia.
