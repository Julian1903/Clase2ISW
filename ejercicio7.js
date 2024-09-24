// Función que recibe un array de números y retorna la suma de todos los números
function sumarArray(numeros) {
    let suma = 0; // Inicializamos la suma en 0
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]; // Sumamos cada número al total
    }
    return suma; // Retornamos la suma total
}
//Función que recibe un array de números y retorna el promedio
function promedioArray(numeros) {
    const suma = sumarArray(numeros);
    return suma / numeros.length;
}

//Función que toma un arreglo de strings y devuelve un nuevo arreglo con todas las letras en mayúsculas
function convertirAMayusculasArray(strings) {
    return strings.map(str => str.toUpperCase());
}

//Función que toma un arreglo de números y devuelve un nuevo arreglo con solo los números pares
function filtrarPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
}

const numeros = [1, 2, 3, 4, 5]
const strings = ['Chillancito', 'Cabrero', 'Concepcion']

//imprimir arreglos originales
console.log('Arrays originales:')
console.log(numeros)
console.log(strings)

//agregar un elemento al final del arreglo e imprimirlos
numeros.push(6)
strings.push('ubb')
console.log('\nArrays con numero y string agregados:')
console.log(numeros)
console.log(strings)

//imprimir funciones con el elemento agregado
console.log('\nFunciones de los arrays con numero y string agregados:')
console.log('Suma elementos Array:', sumarArray(numeros))
console.log('Promedio elementos Array:',promedioArray(numeros))
console.log('Array convertido a mayusculas:',convertirAMayusculasArray(strings))
console.log('Numeros pares en el Array:',filtrarPares(numeros))

//eliminar el ultimo elemeto del arreglo
numeros.pop()
strings.pop()
console.log('\nArrays con numeros y string elimindaos')
console.log(numeros)
console.log(strings)

console.log('\nFunciones de los arrays con numero y string eliminados:')
console.log('Suma elementos Array:',sumarArray(numeros))
console.log('Promedio elementos Array:',promedioArray(numeros))
console.log('Array convertido a mayusculas:', convertirAMayusculasArray(strings))
console.log('Numeros pares en el Array:',filtrarPares(numeros))