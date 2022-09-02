# Variáveis

Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou identificadores.

Para criar uma variável, podemos usar uma das palavras reservadas: var, let e const.

   - por exemplo: `var clima = "quente"`.
     1. `var` é a palavra que simboliza a criação da variável
     2. `clima` é o nome da variável.
     3. o sinal de igual (`=`) denota que a variável está recebendo um valor e "quente" é a string que está sendo recebida. 

As variáveis declaradas com `"var"` e `"let"` podem ter seu valor mudado, já a `const` não.

* Variáveis são nomes simbólicos para receber alguns valores
* Atalhos de códigos
* Identificadores
* 3 palavras reservadas para criar uma variável
  * var
  * let
  * const

## Tipos dinâmicos

O JavaScript é uma linguagem fracamente tipada e dinâmica, ou seja, ao declarar uma variável não é necessário estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código.

* Variáveis não precisam ter um tipo previamente definido. (int, float, char, boolean.)
* Podemos mudar o conteúdo da variável.

O uso de `typeof` nos permite saber qual o tipo de dados que estamos usando na variável. 
   Ex: `typeof name-variable`

### A constante é a única que não vai permitir fazer a alterações nem nos valores nem na tipagem.

## Scope var

O Scope ou Escopo determina a *visibilidade* de uma variável em um código, e para entender scope precisamos primeiramente entender **block statement**, que é o código presente dentro de chaves.

O escopo do `var` é global, ou seja, uma variável declarada com var poderá ser usada em todo o código.

- Block statement

```js
// vamos iniciar um bloco
{
   // aqui dentro é um bloco e posso colocar qualquer código
   // aqui fechamos o bloco
}
```

O bloco também criará um novo escopo. Chamamos de `block-scoped`


## Scope let

Diferentemente de `var`, `const` e `let` são variáveis com escopo local, ou seja, só são visíveis no escopo onde foram criadas e em escopos interiores ao de criação.

Em uma variável `let`, porém, pode-se alterar o valor em um escopo e o valor irá persistir no escopo de criação.

geralmente evitamos usar o `var` devido a sua flexibilidade. Os devs geralmente optam em usar o `let`e `const`.