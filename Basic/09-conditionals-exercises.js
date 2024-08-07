/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Imprime por consola tu nombre si una variable toma su valor
let name = "Estela"
if (name === "Estela") {
    console.log(name);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
let user = "miUsuario";
let password = 1234;
if (user === "miUsuario" && password === 1234) {
    console.log("Usuario y contraseña coinciden");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 0
if (number < 0) {
    console.log("Este número es negativo")
} else if (number > 0) {
    console.log("Este número es positivo")
} else {
    console.log("Este número es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 16
if (age >= 18) {
    console.log("Puede votar")
} else {
    let yearsUntilVotingAge = 18 - age
    console.log(`Podrá votar dentro de ${yearsUntilVotingAge} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
const adultAge = age >= 18 ? "adulto" : "menor"
console.log(adultAge)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let month = 6; // junio

if (month === 12 || month === 1 || month === 2) {
  console.log("Es invierno");
} else if (month === 3 || month === 4 || month === 5) {
  console.log("Es primavera");
} else if (month === 6 || month === 7 || month === 8) {
  console.log("Es verano");
} else if (month === 9 || month === 10 || month === 11) {
  console.log("Es otoño");
} else {
  console.log("Mes inválido");
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior switch
if (month === 2) {
    console.log("Este mes tiene 28 o 29 días (dependiendo del año)")
} else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    console.log("Este mes tiene 31 días")
} else if ([4, 6, 9, 11].includes(month)) {
    console.log("Este mes tiene 30 días");
} else {
    console.log("Mes inválido")
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let lang = "pt"
let greeting

switch (lang) {
    case "es":
        greeting = "Hola"
        break
    case "en":
        greeting = "Hi"
        break
    case "it":
        greeting = "Ciao"
        break
    case "pt":
        greeting = "Olà"
        break
    default:
        greeting = "Select a language"
}

console.log(greeting)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
month = 2; // June

switch (month) {
  case 1:
  case 2:
  case 12:
    console.log("Invierno");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Primavera");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Verano");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Otoño");
    break;
  default:
    console.log("Mes inválido");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
month = 8; // June

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Este mes tiene 31 días");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Este mes tiene 30 días");
    break;
  case 2:
    console.log("Este mes tiene 28 o 29 días (dependiendo del año)");
    break;
  default:
    console.log("Mes inválido");
}