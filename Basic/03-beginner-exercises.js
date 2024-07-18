// 1. Escribe un comentario en una línea
// Esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas
/* Esto es
un comentario
en varias líneas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let city = "Madrid"
let weight = 60
let isAvailable = true
let newSymbol = Symbol("newsymbol")
let newUndefined
let newNull = null
let newBigInt = BigInt(7302475032795632562309569235609325603295603265902365092805)

// 4. Imprime por consola el valor de todas las variables
console.log(city)
console.log(weight)
console.log(isAvailable)
console.log(newSymbol)
console.log(newUndefined)
console.log(newNull)
console.log(newBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof city)
console.log(typeof weight)
console.log(typeof isAvailable)
console.log(typeof newSymbol)
console.log(typeof newUndefined)
console.log(typeof newNull)
console.log(typeof newBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
city = "Cañada"
weight = 55
isAvailable = 1 < 2
newSymbol = Symbol("oldsymbol")
oldUndefined = newUndefined
oldNull = newNull
newBigInt = 2737984612095834165784136758645874326587346543756234n


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
city = 0
weight = false
isAvailable = 1
newSymbol = null
newUndefined = "No soy un undefined"
newNull = 5
newBigInt += " Soy un big int"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const origin = "Cañada"
const size = 40
const healthy = true
const anotherSymbol = Symbol("anothersymbol")
//const anotherUndefined
const anotherNull = null
const anotherBigInt = 375981475908146578167841549184981435n

// 9. A continuación, modifica los valores de las constantes
/*const origin = "Alicante"
const size = 50
const healthy = false
const anotherSymbol = Symbol("anothersymbol2")
const anotherUndefined
const anotherNull = null
const anotherBigInt = 37598147590814659235789823578167841549184981435n*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse