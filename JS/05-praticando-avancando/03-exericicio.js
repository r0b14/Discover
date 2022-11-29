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

    4.1 Atribua a ela as memsas propriedades e valores do exercicio 3.

    4.2 Mostre no console a seguinte mensagem:

      <name> de idade <age> pesa <weight> kg.

      Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

    let student = {
      name: "Robson",
      age: 30,
      stars: 5.0,
      weight: 95,
      isSubscribed: true
    };

    console.log(`${student.name} de idade ${student.age} e pesa ${weight}`);