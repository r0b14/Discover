
/*
* * Concatenando e interpolando
*/

let age, name, isHuman

name = "Pedro"
age = 18
isHuman = true

// concatenação
console.log('o ' + name + ' tem ' + age + ' anos.')

// interpolação
console.log(`o ${name} tem ${age} anos.`)


/*
* * Object
*/

// Objeto Completo
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

// mostrando o objeto completo
console.log(person)
// mostrando um elemento do objeto
console.log(person[0].name)
// interpolando propriedades do object
console.log(`${person[0].name} tem ${person[0].age}. A sua altura eh ${person[0].weight}`)

/**
 * Array
*/

// Construindo o array 
const animals = [ 'Lion', 'Monkey', 'Cat']

// acessando valores
animals[2] // acessando o elemento na posição 2
console.log(animals[2])

// sabendo o tamanho do array. O tamanhoa do array é contado de 1, porém as posiçãoes são contadas a partir de 0
console.log(animals.length)
