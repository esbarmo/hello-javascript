/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(i)
} 

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sum = 0

for (let i = 1; i <= 100; i++) {
    sum += i
}

console.log("La suma de todos los números del 1 al 100 es:", sum)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let myNameArray = [
    "Clara", "Pablo", "Diana", "Felipe", "Laura", "Julián", "Carla",
    "Martín", "Elena", "Gonzalo", "Alba", "Diego", "Lola", "Joaquín"
]

for (let names of myNameArray) {
    console.log(names)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let myQuote = "Vi mi vida extendiendo sus ramas frente a mí como la higuera verde del cuento..."
myQuote = myQuote.toLowerCase()
const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']
let vowelsCounter = 0
for (let i = 0; i < myQuote.length; i++) {
    if (vowels.includes(myQuote[i])) {
        vowelsCounter++;
    }
}
console.log(`El número de vocales en la cita es: ${vowelsCounter}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let myArray = [3, 4, 13, 22, 34]
let mult = 1

for (let i = 0; i < myArray.length; i++) {
    mult *= myArray[i]
}

console.log("El resultado de multiplicar todos los números es:", mult)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 0; i <= 10; i++) {
    console.log(`5 x ${i} = ${i * 5}`)
}

// 8. Usa un bucle para invertir una cadena de texto
let mySecondQuote = "Pero la joya que perdiste era azul"
let reverseQuote = ""
for (let i = mySecondQuote.length - 1; i >= 0; i--) {
    reverseQuote += mySecondQuote[i]
}
console.log(reverseQuote)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fib = [0, 1]
for (n = 2; n < 10; n++) {
    fib[n] = fib[n-1] + fib[n-2]
}
console.log(fib)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
myNewArray = []
for (i = 0; i < fib.length; i++) {
    if (fib[i] > 10) {
        myNewArray.push(fib[i])
    }
}
console.log(myNewArray)