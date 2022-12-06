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

let number1 = 345.1155 // Inserindo 2 casas décimais para o número
console.log(number1.toFixed(2)); // limitando as casas decimais do número
console.log(number1.toFixed(2).replace(".", ",")); // trocando de ponto para virgula

/**
 * Maiusculas e minusculas
 **/

let keyWords = "Por valor, contratual IC - SEE";
console.log(keyWords.toUpperCase()); // Tornando tudo maiusculas
console.log(keyWords.toLowerCase()); // Tornando tudo minusculas
console.log(keyWords.toUpperCase().toLowerCase); // mostrando que podemos usar +1 metodo