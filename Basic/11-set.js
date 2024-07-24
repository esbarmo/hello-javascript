// set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Estela", "Barceló", "esbarmo", 28, true])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("estelabarcelo_34@hotmail.com")

console.log(mySet)

console.log(mySet.delete("Barceló"))

console.log(mySet)

// has

console.log(mySet.has("Estela"))
console.log(mySet.has("Barceló"))

// size

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("Estela")
mySet.add("Estela")
mySet.add("estela")
console.log(mySet)