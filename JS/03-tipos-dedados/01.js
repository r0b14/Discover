// codepen.io/pen

// Aplicando Strings

let idade = 22;

console.log(`Robson tem ${idade} anos`);
console.log("Robson tem " + idade + " anos");

// Aplicando number

// Naturais
console.log(33);
console.log(-33);

// Reais com divisão e soma
console.log(12.5 + 12);
console.log(12.5 / 12);

// NaN
console.log(12.5 / "asdf");

// Infinity
console.log(Infinity === 12.5);

// Boolean
console.log(idade == 30);

// Object

//1
console.log({
  name: "Robson",
  idade: 21,
});
//2 - estrutura
console.log({
  name: "Robson",
  idade: 21,
  andar: function () {
    console.log("andar");
  },
});

// Array
var frutas = ["manga", "uva", "banana"];
console.log(frutas); // mostrando toda a array completa
console.log(frutas[1]); // mostrando toda o elemento na posicao 1 da array
console.log(["Robson", 36]);
