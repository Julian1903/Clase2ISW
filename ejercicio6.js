//recibir un string y retornar en mayusculas
function convertirAMayusculas(string) {
    return string.toUpperCase();
}

//recibir un string y retornar en minúsculas
function convertirAMinusculas(string) {
    return string.toLowerCase();
}

//recibir 2 numeros y restarlos
function restar(num1, num2) {
    return num1 - num2;
}

//recibir 2 numeros y dividirlos
function dividir(num1, num2) {
    return num1 / num2;
}

//recibir 2 numeros y multiplicarlos
function multiplicar(num1, num2) {
    return num1 * num2;
}

//recibir un string y devolver su longitud
function longitudString(string) {
    return string.length;
}

// Ejemplos de uso
console.log(convertirAMayusculas("hola")); // HOLA
console.log(convertirAMinusculas("HOLA")); // hola
console.log(restar(10, 5)); // 5
console.log(dividir(10, 2)); // 5
console.log(dividir(10, 5));
console.log(multiplicar(10, 5)); // 50
console.log(longitudString("Julian Gaete")); // 10
