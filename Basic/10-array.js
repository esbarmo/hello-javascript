// array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Estela", "Barceló", "esbarmo", 28, true]
myArray2 = new Array("Estela", "Barceló", "esbarmo", 28, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Barceló"
myArray2[1] = "Estela"
//myArray2[0] = "esbarmo"
myArray2[4] = "esbarmo" 

console.log(myArray2)

myArray = []
myArray[2] = "Barceló"
myArray[1] = "Estela"
//myArray[0] = "esbarmo"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Platea")
myArray.push("Estela")
myArray.push(28)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Estela", "Barceló")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray.push("Estela", "Barceló", "esbarmo", 28, true)

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 4)
console.log(myArray)

myArray = ["Estela", "Barceló", "esbarmo", 28, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)
