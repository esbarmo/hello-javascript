// Objects

// Sintaxis

let person = {
    name: "Estela",
    age: 28,
    alias: "esbarmo"
}

// Acceso a propiedades

// Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["name"])

// Modifiación de propiedades

person.name = "Estela Barceló"
console.log(person.name)

console.log(typeof person.age)
person.age = "28"
console.log(person.age)
console.log(typeof person.age)

// Eliminación de propiedades

delete person.age

console.log(person)

// Nueva propiedad

person.email = "estelabarcelo_34@hotmail.com"
person["age"] = 28

console.log(person)

// Métodos (funciones)

let person2 = {
    name: "Estela",
    age: 28,
    alias: "esbarmo",
    walk: function() {
        console.log("La persona camina.")
    }
}

person2.walk()

// Anidación de objects

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

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objetos

let person4 = {
    name: "Estela Barceló",
    alias: "esbarmo",
    email: "estelabarcelo_34@hotmail.com",
    age: 28
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name === person4.name)

// Iteración

for (let key in person4) {
    console.log(key + ": " + person4[key])
}

// Funciones como objects

function Person(name, age) { // Debería ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Estela", 28)
console.log(person5)
console.log(typeof person4)
console.log(typeof person5)