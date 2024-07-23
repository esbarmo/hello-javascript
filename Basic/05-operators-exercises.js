let num1 = 3
let num2 = 4

// 1. Crea una variable para cada operación aritmética
let sum = num1 + num2; // 7
let subtraction = num1 - num2; // -1
let multiplication = num1 * num2; // 12
let division = num1 / num2; // 0.75
let remainder = num1 % num2; // 3
let exponentiation = num1 ** num2; // 81

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso
// de las variables utilizadas para las operaciones aritméticas
let myVariable2 = 2
let additionAssignment = sum += myVariable2 // 9
let subtractionAssignment = subtraction -= myVariable2 // -3
let multiplicationAssignment = multiplication *= myVariable2 // 24
let divisionAssignment = division /= myVariable2 // 0.375
let remainderAssignment = remainder %= myVariable2 // 1
let exponentiationAssignment = exponentiation **= myVariable2 // 6561

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(sum === additionAssignment)
console.log(exponentiation == "6561")
console.log(subtractionAssignment < remainderAssignment)
console.log(multiplication != remainder)
console.log(division >= 0.375)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(remainder == false)
console.log(exponentiationAssignment <= "6560")
console.log(divisionAssignment !== 0.375)
console.log(myVariable2 > num1)
console.log(num1 === num2)

// 5. Utiliza el operador lógico and
console.log(remainder && true == 1)

// 6. Utiliza el operador lógico or
console.log(num1 < myVariable2 || num2 > myVariable2)

// 7. Combina ambos operadores lógicos
console.log(num1 == 3 && num2 ==4 || myVariable2 == 1)

// 8. Añade alguna negación
console.log(!(divisionAssignment > remainderAssignment))

// 9. Utiliza el operador ternario
let isRemaining = remainder
isRemaining ? console.log("Ha sobrado algo") : console.log("No ha sobrado nada")

// 10. Combina operadores aritméticos, de comparación y lógicos
console.log(exponentiation / exponentiationAssignment == true && remainderAssignment == true)