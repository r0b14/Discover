/**
 * Type conversion vs type coersion
 **/

console.log(Number("9") + 8); // convertendo concatenação de string em soma de número inteiros
console.log("9" + 8); // comentando o erro de achar que irá fazer a soma dos números

/**
 * Manipulação de strings em números
 **/

let letras = "123";
console.log(Number(letras)); //convertendo a string em number
let numeros = 546;
console.log(String(numeros)); // convertendo o número em string

// verificando o tipo de dado
console.log(typeof letras === "string");

// verificando o tipo de dado
let testeNumber = 55;
console.log(typeof testeNumber);

/**
 * Contrando a quantidade de caracteres e digitos
 **/

let word = "Brasil";
console.log(word.length);
let number = 1234;
console.log(String(number).length);

/**
 * Trocando ponto por virgula.
 **/

let number1 = 345.1155; // Inserindo 2 casas décimais para o número
console.log(number1.toFixed(2)); // limitando as casas decimais do número
console.log(number1.toFixed(2).replace(".", ",")); // trocando de ponto para virgula

/**
 * Maiusculas e minusculas
 **/

let keyWords = "Por valor, contratual IC - SEE";
console.log(keyWords.toUpperCase()); // Tornando tudo maiusculas
console.log(keyWords.toLowerCase()); // Tornando tudo minusculas
console.log(keyWords.toUpperCase().toLowerCase); // mostrando que podemos usar +1 metodo

/**
 * Manipulando strings e arrays
 **/

// Separar um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transformar o array em um texto e onde eram espaços, colocar `_`

let text1 = "Texto inserido pelo usuario";
let arrayText1 = text1.split(" "); //o argumento do método é base que permite separar as palavras da frase/texto. Nesse caso vai ser separado todas as vezes que encontrar um espaços
console.log(arrayText1); // Percebe-se que ele "come" no momento que encontra o elemento informado.

let textoConverted = arrayText1.join("_"); // Converteu todo o texto que estava inserido em um array em uma string e separou as palavras com o `_`
console.log(textoConverted); // mostra na tela a junção

/**
 * Encontrando palavras em frases
 **/

let frase1 = "O amor sempre mora na vida"
console.log(frase1.includes("amor")); // true

/**
 * Criando array com construtor
 **/

let myArray1 = [1, 2, 3, 4, 5] // essa seria o método convencional
let myArray2 = new Array('a', 'b', 'c', 'd')// ou criar com espaços vazios = `new Array(10)`
console.log(myArray2); // mostrando

/**
 * Contando elementos do array
 **/

let contArray = [
  "a",
  {type: "array"},
  function() { return "Function Aplications "}
]

console.log(contArray.length); // mostrando quantos elementos tem dentro do array. conta apartir do 1

/**
 * Transformando de string para array
 **/

let stringArray = "Manoel Barbosa"

Array.from(stringArray)

