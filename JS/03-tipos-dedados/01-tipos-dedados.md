# Tipos de dados

* Gramática
    - Elementos da linguagem e suas combinações.
    - A arte de falar e escrever corretamente.

* Vocabulário
    - Conjunto de termos e expressões
    - Agrupamento de palavras

* Precisamos saber como escrever
* Precisamos saber os significados
* Precisamos continuar aprendendo, para crescer nosso vocabulário.

## Como vai ser a dinâmica do aprendizado?

* Conceito e escrita

> Vamos aprender os tipos de dados mais utilizados na linguaguem.

## String

* Cadeia de caracteres

O tipo de dados *String* consiste em uma cadeia de caracteres, ou seja, textos.
Para denotar string no JavaScript são usados aspas duplas (" "), aspas simples ( ' ' ) e template literals ou template strings ( ).

  - template literals permitem textos multilinhas e expressões de linguagem com os caracteres `${ }` (Crase)(interpolação), por exemplo: `console.log(A soma de duas unidades é ${1+1})`.
    - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
    - já as outras não, por exemplo: console.log("Isso é um texto").
      - Exemplos: `console.log(`Robson tem ${idade} anos`);` | `console.log("Robson tem " + idade + " anos");`

  
*Dica* -> podemos usar aspas duplas ("") quando dentro do texto (string) usar aspas simples (''). Isso pode ser levado em consideração caso deseje usar o oposto.

## Number

* Números
  
No JavaScript temos 4 tipos de números, os inteiros (por exemplo: 13), os reais ou float (por exemplo: 83.1), o Not a Number (NaN) e o infinito (Infinity).

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

No JavaScript temos o tipo de dados Undefined, que representa valores indefinidos, e o tipo de dados null, que são muitas vezes confundidos. A diferença dos dois é que undefined é considerado como um objeto vazio, ou seja, algo indefinido não existe, já algo null existe mas não tem valor algum.

* indefinido
`undefined` é considerado como um objeto vazio, ou seja, algo indefinido não existe.

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