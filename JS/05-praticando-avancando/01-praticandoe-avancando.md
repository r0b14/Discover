# Praticando e avançando

## Agrupando Declarações
É possível agrupar diversas declarações de variáveis em JavaScript usando `let`, `const` ou `var` e colocando uma vírgula entre os nomes das variáveis a serem criadas.

por exemplo: `let name`, `age`, `isStudent`.

Para mostrar mais de uma variável no `console.log` também é possível usando vírgula.

por exemplo: `console.log(name, age, isStudent)`.

## Concatenando e interpolando variáveis
É possível concatenar strings com o operador `+`.

por exemplo: `console.log('o ' + name + ' tem ' + age + ' anos.')` 

desta maneira as variáveis serão convertidas em texto e o que será mostrado será um texto com o nome e a idade que foram estabelecidas no código.

Uma outra maneira de escrever um texto com variáveis é por meio da interpolação com template literals, usando `crase` para o texto e `${}` para denotar uma variável.

por exemplo: `console.log(O ${name} tem ${age} anos.)` o resultado deste comando será o mesmo texto do anterior.

- Concatenação
```JS
let age, name, isHuman

name = "Pedro"
age = 18
isHuman = true

console.log('o ' + name + ' tem ' + age + ' anos.')
```

- Interpolação
```JS
let age, name, isHuman

name = "Pedro"
age = 18
isHuman = true

console.log('o ' + name + ' tem ' + age + ' anos.')
```

## Objects
Para criarmos um objeto utilizamos as `chaves` envolvendo as propriedades, que são atribuídas com dois pontos.

por exemplo: `const person = { name: 'John', age: 20 }`, para acessar essas propriedades usamos o `"."`.

por exemplo: `console.log(person.name)`.

```JS
// Objeto Completo
const person = {
    name: 'Pedrão',
    age: 22,
    weight: 88.6,
    isAdmin: true
}

// mostrando o objeto completo
console.log(person)
// mostrando um elemento do objeto
console.log(person.name)
// interpolando propriedades do object
console.log(`${person.name} tem ${person.age}. A sua altura eh ${person.weight}`)
```

```JS
// Array que contém diversos objetos
const person = [
    {
        name: 'Pedrão',
        age: 22,
        weight: 88.6,
        isAdmin: true
    },
    {
        name: 'Manoela',
        age: 19,
        weight: 80.6,
        isAdmin: false
    }   
]

// mostrando o array completo
console.log(person)
// mostrando um elemento 0 do array
console.log(person[0].name)
// interpolando propriedades do array na posição 0
console.log(`${person[0].name} tem ${person[0].age}. A sua altura eh ${person[0].weight}`)
```