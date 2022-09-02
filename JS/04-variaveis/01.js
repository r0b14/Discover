// 01 - variaveis

var clima = "Quente";

console.log(`${clima}`);

// 02 - tipos dinamicos

let variavelTestagem = 0;

console.log(typeof variavelTestagem);

/**
 * 03 - Scope e var
 **/

// Vamos iniciar um bloco
{
  let x = 0;
  console.log(x);
}

// Testando o escopo do tipo de declaração var
// Var é global e também local
console.log("> existe x antes do bloco? ", x);
{
  let x = 0;
}
console.log("> existe x depois do bloco? ", x);