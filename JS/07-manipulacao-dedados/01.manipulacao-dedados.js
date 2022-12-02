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
console.log(typeof letras === 'string') 

// verificando o tipo de dado 
let testeNumber = 55;
console.log(typeof testeNumber)