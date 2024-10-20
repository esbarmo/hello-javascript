// 1. Crea un objeto con 3 propiedades
// This is just an object representation of a cookie
// In a real-world scenario, you would typically use methods or libraries
// to actually set and manage cookies in a web browser
const myCookie = {
    name: "trackingAllowed",
    value: true,
    expDate: new Date("2023-11-22")
}

console.log(myCookie)

// 2. Accede y muestra su valor
console.log(myCookie.name)
console.log(myCookie.value)
console.log(myCookie["expDate"])

// 3. Agrega una nueva propiedad
myCookie.domain =  "example.com"
console.log(myCookie)

// 4. Elimina una de las 3 primeras propiedades
delete myCookie.value
console.log(myCookie)

// 5. Agrega una función e invócala
myCookie.isExpired = function() { // Función para verificar si la cookie ha expirado
    const currentDate = new Date();
    return currentDate > this.expDate;
}
console.log("Is cookie expired?", myCookie.isExpired());

// 6. Itera las propiedades del objeto
for (let attribute in myCookie) {
    console.log(attribute + ": " + myCookie[attribute])
}

// 7. Crea un objeto anidado
const myCookie2 = {
    info: {
        name: "LOGIN_INFO",
        value: "AFmmF2swgduqbdLFwgq2yR5SAcf2-LO8W3v9UFEChj6rIxT2l54QX:QUQ3MjNeWlCBXOEVW",
        expDate: new Date("2023-11-22"),
        domain: "example.com"
    },
    methods: {
        isExpired: () => {
            const currentDate = new Date();
            return currentDate > myCookie2.info.expDate;
        }
    }
};
console.log(myCookie2)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(myCookie2.info)
console.log(myCookie2.methods.isExpired())

// 9. Comprueba si los dos objetos creados son iguales
console.log(myCookie == myCookie2)
console.log(myCookie === myCookie2)

// 10. Comprueba si dos propiedades distintas son iguales
console.log(myCookie.expDate.getTime() === myCookie2.info.expDate.getTime())
console.log(myCookie.name === myCookie2.info.domain)