/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b) {
    return a + b
}
let result = sum(3, 5)
console.log(result)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function findMaxNumber(arr) {
    if (arr.length === 0) {
        return undefined
    }

    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max
}

console.log(findMaxNumber([2, 4, 5, 6, 7, 8, 9, 10])); // Output: 10
console.log(findMaxNumber([100, 5, 200, 50, 10])); // Output: 200
console.log(findMaxNumber([-5, -2, -10, -1])); // Output: -1
console.log(findMaxNumber([])); // Output: undefined

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function vowelCount(str) {
    str = str.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']
    let vowelsCounter = 0
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelsCounter++;
        }
    }
    return vowelsCounter
}
console.log(`El número de vocales en el string es: ${vowelCount("Hola qué tal, ¿cómo estás?")}`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let arr = ['hola', 'que', 'tal']

function toUpperCase(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toUpperCase())
    }
    return newArr
}

console.log(toUpperCase(arr))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function isPrimeNumber(num) {
    // Los números menores o iguales a 1 no son primos
    if (num <= 1) return false;
    
    // 2 es el único número par que es primo
    if (num === 2) return true;
    
    // Si es par y no es 2, no es primo
    if (num % 2 === 0) return false;
    
    // Comprobamos solo los impares hasta la raíz cuadrada del número
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    
    // Si no se encontraron divisores, es primo
    return true;
}

console.log(isPrimeNumber(1));  // false
console.log(isPrimeNumber(2));  // true
console.log(isPrimeNumber(17)); // true
console.log(isPrimeNumber(18)); // false

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const arr1 = ["Vito Corleone", "Michael Corleone", "Sonny Corleone", "Tom Hagen", "Francis Ford Coppola"];
const arr2 = ["Michael Corleone", "Vincent Mancini", "Mario Puzo", "Francis Ford Coppola", "Marlon Brando"];

function findCommonElements(arr1, arr2) {
    let commonElements = []
    for(let value of arr1) {
        if(arr2.includes(value)) {
            commonElements.push(value)
        }
    }
    return commonElements
}

console.log(findCommonElements(arr1, arr2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let numberArr = [3, 4, 13, 22, 34, 69]

function sumEvenNumbers(numberArr) {
    let evenSum = 0
    for(let num of numberArr) {
        if (num % 2 === 0) evenSum += num
    }
    return evenSum
}

console.log(sumEvenNumbers(numberArr))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function squareNumbers(numbers) {
    let squaredNumbers = []
    for(let num of numbers) {
        squaredNumbers.push(num ** 2)
    }
    return squaredNumbers
}

let numbers = [3, 4, 13, 22, 34, 69]

console.log(squareNumbers(numbers))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function reverseString(textStr) {
    let reversedStr = ""
    for(let i = textStr.length - 1; i >= 0; i--) {
        reversedStr += textStr[i]
    }
    return reversedStr
}

console.log(reverseString("devil"))

// 10. Crea una función que calcule el factorial de un número dado

function calculateFactorial(num) {
    let factorial = 1
    for(let i = num; i > 0; i--) {
        factorial *= i
    }
    return factorial
}

console.log(calculateFactorial(4))