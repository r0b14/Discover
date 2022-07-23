# A cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo. -> programação estruturada

É levado em consideração 3 fatores:
1. Origem do estilo
2. Especificidade
3. Importância

### Origem do estilo

inline ( dentro do html ) > tag style ( dentro do html ) > tag link (vem de fora)

### Especificidade

É um calculo matemático, onde, cada tipo de selector e origem do estilo, possuem valores a serem considerados.

0. Universal selector (*), combinators e negation pseudo-class (:not())
1. Element type selector (h1, h2...) , pseudo-elements (::before, ::after)
10. Classes e attribute selector (.class) ([type="radio"])
100. ID selector (#id)
1000. Inline (dentro do html)

### Regra important

* cuidado, evite o uso.
* não é considerado uma boa prática.
* quebra o fluxo natural da cascata.