// 1. Declare uma variável de nome weight
// A intensão é só a declaração da variável
let weight;

// 2. Que tipo de dado é a variável acima?
// caso você não saiba que tipo de dado foi declarado, existe um palavra chave que permite que seja descoberto.
console.log(typeof weight);

/*
  3. Declare uma variável e atribua valores para cada um dos dados:
    * name: string
    * age: number (integer)
    * stars: number (float)
    * isSubscribed: boolean
*/

let name = "Robson";
let age = 30;
let stars = 5.0;
let isSubscribed = true;

/**
    4. A variavel student abaixo é de que tipo de dados?
      É um objeto.
    
    4.1 Atribua a ela as memsas propriedades e valores do exercicio 3.

    4.2 Mostre no console a seguinte mensagem:

      <name> de idade <age> pesa <weight> kg.

      "Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto"
*/

let student = {
  name: "Robson",
  age: 30,
  stars: 5.0,
  weight: 95,
  isSubscribed: true,
};

console.log(`${student.name} de idade ${student.age} e pesa ${student.weight} kg`);

/**
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
**/

let students = [];

/**
    6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
**/

students = [
  student
];

console.log(students); // mostrando todos os elementos que possuem dentro do array


/**
    7. Coloque no console o valor da posição zero do Array acima
**/

console.log(students[0]); // mostrando apenas o elemento na posição 0

/**
    8. Crie um novo student e coloque na posição 1 do array students
**/

const manoel = {
  name: "Manoel",
  age: 22,
  stars: 4.8,
  weight: 80,
  isSubscribed: false,
}

students = [ student, manoel ]

console.log(students);

/**
    9. Sem rodar o código responda qual é a resposat do codigo abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    Console.log(a) 
    var a = 1

      Vai aparecer undefined, pois o objeto só será criado após a passagem pelo primeirmo console.
      caso use a palavra `let` vai dá erro de referenciação
 */

      console.log(a) 
      var a = 1