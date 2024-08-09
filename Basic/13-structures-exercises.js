/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales

let myFarm = new Array("perro", "gato", "gallina", "caballo", "pavo")

console.log(myFarm)

// 2. Añade dos más. Uno al principio y otro al final

myFarm.push("cerdo")
myFarm.unshift("cabra")

console.log(myFarm)

// 3. Elimina el que se encuentra en tercera posición

myFarm.splice(2, 1)

console.log(myFarm)

// 4. Crea un set que almacene cinco libros

let myBooks = new Set(['No es fiera para domar', 'Sandman', 'Una tienda en París', 'Diseño desde Marte', 'El camino del artista'])

console.log(myBooks)

// 5. Añade dos más. Uno de ellos repetido

myBooks.add('Discurso amoroso', 'Sandman')

console.log(myBooks)

// 6. Elimina uno concreto a tu elección

myBooks.delete('Una tienda en París')

console.log(myBooks)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myCalendar = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"]
])

console.log(myCalendar)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myCalendar.has(5))
console.log(myCalendar.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

myCalendar.set("summer", new Array(myCalendar.get(6), myCalendar.get(7), myCalendar.get(8)))

console.log(myCalendar)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = ['javascript', 'css', 'html', 'php']

mySet = new Set(myArray)

console.log(mySet)

myMap = new Map([
    ["lenguajes", myArray]
])

console.log(myMap)