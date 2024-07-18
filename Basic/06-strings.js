// Strings

// Concatenación

let myName = "Estela"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[greeting.length-1])

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Estela"))
console.log(greeting.indexOf("esbarmo"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Estela"))
console.log(greeting.includes("esbarmo"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Estela", "esbarmo"))

// Template literals (plantillas literales)
let message = `Este 
es mi 
curso de 
JavaScript`

console.log(message)

console.log(`Hola, ${myName}! 
${message}`)