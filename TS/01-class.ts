let a = 'hola' //String
// * --> a = 2 //Number 
a = "Ivan Ortega Garzon"

//TODO: En Type Scrtip no se puede cambiar el type de variables no son reasignables
console.log(typeof a) //* ---> Number

//* Es necesario poder saber que tipo esperamos evitaremos muchos errores
function suma(a: number, b: number) {
    return a + b
}

suma(3, 3)

console.log(suma)
