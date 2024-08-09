// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let myFriends = ['Rafa', 'Mario', , 'Isa']

let [name1, name2, name3, name4] = myFriends
console.log(name1, name2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [name5, name6, name7 = 'Nombre', name8] = myFriends
console.log(name7)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let gymbro = {
    name: name1,
    age: 25,
    favoriteExercise: 'Bench Press',
    maxBenchPress: 225
};

let {name, age, favoriteExercise, maxBenchPress} = gymbro
console.log(favoriteExercise, maxBenchPress);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {name: alias, age: expertice} = gymbro
console.log(alias, expertice);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let gymbro2 = {
    name: name2,
    age: 26,
    favoriteExercise: 'Deadlift',
    maxBenchPress: 300,
    gymEquipment: {
        dumbbells: '25 kg',
        bench: 'Flat Bench',
        resistanceBands: 'High Resistance'
    },
    doExercise: function() {
        console.log(`${this.name} is doing ${this.favoriteExercise}!`);
    }
}

let {gymEquipment: {dumbbells: weight, bench: benchType}} = gymbro2
console.log(weight, benchType)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let myChildHoodFriends = ["David", "Teresa", "Lydia"]
let allFriends = [...myFriends, ...myChildHoodFriends]
console.log(allFriends)

// 7. Usa propagación para crear una copia de un array

let myNewFriends = [...myFriends]
console.log(myNewFriends)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let workoutRoutine = {
    routineName: 'Strength Training',
    daysPerWeek: 4,
    exercises: ['Squats', 'Deadlifts', 'Bench Press', 'Pull-Ups']
};

let supergymbro = {...gymbro, ...workoutRoutine}
console.log(supergymbro)

// 9. Usa propagación para crear una copia de un objeto

let myRoutine = {...workoutRoutine}
console.log(myRoutine)

// 10. Combina desestructuración y propagación

let {doExercise} = gymbro2
let newgymbro = {...gymbro, doExercise}
console.log(newgymbro.doExercise())