# Tipos de dados

* Gramática
  * Elementos da linguagem e suas combinações.
  * A arte de falar e escrever corretamente.

* Vocabulário
  * Conjunto de termos e expressões
  * Agrupamento de palavras

* Precisamos saber como escrever
* Precisamos saber os significados
* Precisamos continuar aprendendo, para crescer nosso vocabulário.

## Como vai ser a dinâmica do aprendizado?

* Conceito e escrita

> Vamos aprender os tipos de dados mais utilizados na linguaguem.

## String

* Cadeia de caracteres

O tipo de dados *String* consiste em uma cadeia de caracteres, ou seja, textos.
Para denotar string no JavaScript são usados aspas duplas (" "), aspas simples ( ' ' ) e template literals ou template strings (`${ }`).

* template literals permitem textos multilinhas e expressões de linguagem com os caracteres `${ }` (Crase)(interpolação), por exemplo: `console.log(A soma de duas unidades é ${1+1})`.
  * <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals>
  * já as outras não, por exemplo: console.log("Isso é um texto").
    * Exemplos: `console.log(`Robson tem ${idade} anos`);` | `console.log("Robson tem " + idade + " anos");`

*Dica* -> podemos usar aspas duplas ("") quando dentro do texto (string) usar aspas simples (''). Isso pode ser levado em consideração caso deseje usar o oposto.

## Number

* Números
  
No JavaScript temos 4 tipos de números, os inteiros (por exemplo: 22), os reais ou float (por exemplo: 83.1), o Not a Number (NaN) e o infinito (Infinity).

`+33 ou -33` // inteiros
`12.5` // reais ou float
`NaN` // Not a Number (ñ numero)
Infinity // infinito

* Infinity
O infinity não tem um número definido, é por sí só uma palavra e pode ser usado para fazer comparações com variáveis e números.
    `console.log(Infinity === 12.5);`

## Boolean

* Somente 2 valores booleanos

    `true` // verdadeiro
    `falte` // falso

## Undefined

De acordo com a documentação do ECMAScript, o valor `undefined` é utilizado quando uma variável não possui um valor. Já o `null` é utilizado quando se quer intencionalmente dizer que há uma ausência de qualquer valor de objeto para aquela variável.

Um exemplo prático é a chamada dos métodos ou variáveis como `getElementById`, `childNodes[n]`, `parentNode`, etc., e eles retornarem `null` em algum momento. Isso significa que a propriedade chamada existe, mas não possui um valor, ou seja, não há um objeto a ela associado. Se algum método retornar `undefined`, indica que determinada propriedade não existe.

* indefinido
`undefined` é considerado como um objeto vazio, ou seja, algo indefinido não existe.

```JS
    var x;

    x == null            // true
    x == undefined       // true
    x === null           // false
    x === undefined      // true (x não tem valor!)

    var y = null;
v
    y == null            // true
    y == undefined       // true
    y === null           // true
    y === undefined      // false (y existe, e seu valor é null)

    typeof x             // 'undefined'
    typeof y             // 'object'
```

## Null

`null` existe mas não tem valor algum

* Objeto que não possui nada dentro
* diferente de indefinido

## Object

O tipo de dado `Object` é estrutural, contendo atributos, ou propriedades, e métodos, ou funcionalidades. Um objeto é denotado com os caracteres { }, atributos e métodos com nome: valor . Por exemplo { nome: "João", idade: 20 }.

* Object
    Propriedades / Atributos
    Funcionalidades / Métodos

{ propriedades: "valor" }

## Array

O tipo de dados Array, ou vetor, também é estrutural, e consiste em uma lista de dados agrupados, um Array é denotado com os caracteres [ ] , por exemplo: [ "Leite", "Ovos", "Manteiga", 1, 2 ] .

* Array (vetores)
    Uma lista
    Agrupamento de dado

    `["Robson", 36]`
