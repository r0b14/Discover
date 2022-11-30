
// Criando um funcao que aprensenta mensagens movitacionais na tela.

// declaration - declaração de uma função
// function statement

function createPhrases() {
  console.log('Estudar é muito bom');
  console.log('Paciência e persistência');
  console.log('Revisão é mãe do aprendizado');
}

// executar a função
// rodar, chamar, invocar,
// execute, run, call, invoke
createPhrases()

console.log('fim do programa')

// Aplicando o conceito de parametros e argumentos

  //     Estou passando parâmetros
  const sum = function (x,y) { // funcao anônima ou expression
    console.log(`O valor da soma ${x} + ${y} = ${x+y}`); 
  }

  sum(3,2); // estou passando argumentos

// essa forma de declaração pode dar problema se usarmos um console.log e chamarmos a função
  console.log(sum(3,5));


// Resolvendo o problema do uso do return

  //     Estou passando parâmetros
  const sum2 = function (num1,num2) { // funcao anônima ou expression
    let total = num1 + num2
    return total;
  }
  
  let num1 = 10;
  let num2 = 8;
  console.log(`O valor da soma= ${sum2(num1,num2)}`);
