// 1. Concatena dos cadenas de texto
let firstName = "Estela"
let surname = "Platea"
let fullName = firstName + surname

// 2. Muestra la longitud de una cadena de texto
console.log(fullName.length)

// 3. Muestra el primer y último carácter de un string
console.log(fullName[0], fullName[fullName.length-1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
console.log(firstName + "\n" + surname)

// 6. Interpola el valor de una variable en un string
console.log(`${fullName.toUpperCase()}
${fullName.toLowerCase()}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(fullName.replace(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(fullName.includes("Estela"))

// 9. Comprueba si dos strings son iguales
const isRepeated = firstName === surname
isRepeated ? console.log("Son iguales") : console.log("Son distintos")

// 10. Comprueba si dos strings tienen la misma longitud
const sameLength = firstName.length === surname.length
sameLength ? console.log("Tienen la misma longitud") : console.log("Tienen distinta longitud")