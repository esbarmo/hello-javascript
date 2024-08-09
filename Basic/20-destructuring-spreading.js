/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

let myArray = [1, 2, 3, 4]

let person = {
    name: "Estela",
    age: 28,
    alias: "esbarmo"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Desestructuración

// Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis de arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elmentos array

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// Sintaxis objects

let { age, name, alias } = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis de objects con valores predeterminados

let { name2, age2, alias2, email = "estelabarcelo_34@hotmail.com" } = person
console.log(name2) // No existe
console.log(age2) // No existe
console.log(alias2) // No existe
console.log(email)

// Sintaxis de objects con nuevos nombres de variables

let { name: name3, age: age3, alias: alias3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objects anidados

let person3 = {
    name: "Estela",
    age: 28,
    alias: "esbarmo",
    walk: function() {
        console.log("La persona camina")
    },
    job: {
        name: "Programadora",
        exp: 3,
        work: function() {
            console.log(`El persona de ${this.exp} años de experiencia trabaja.`)
        }
    }
}

let { name: name4, job: { name: jobName } } = person3

console.log(name4)
console.log(jobName)

// Propagación (...)

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6]

console.log(myArray2)

// Copia de arrays

let myArray3 = [...myArray]

console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// Sintaxis objects

let person4 = { ...person,  email: "estelabarcelo_34@hotmail.com" }

console.log(person4)

// Copia de objects

let person5 = { ...person }

console.log(person5)