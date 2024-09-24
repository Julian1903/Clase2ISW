//iumprimir los numeros del 1 al 10.
console.log("numeros 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//imprimir los numeros del 10 al 1.
console.log("\nnumeros del 10 al 1:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//imprimir los numeros del 1 al 10 pero solo los pares.
console.log("\nnumeros pares del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//imprimir los numeros del 1 al 10 pero solo los impares.
console.log("\nnumeros impares del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//imprimir los numeros del 1 al 10 pero solo los multiplos de 3.
console.log("\nmultiplos de 3 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//imprimir los numeros del 1 al 10 pero solo los multiplos de 5.
console.log("\nmultiplos de 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

//imprimir los numeros del 1 al 10 pero solo los multiplos de 3 y 5.
console.log("\nmultiplos de 3 y 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

//imprimir los numeros del 1 al 10 pero solo los multiplos de 3 o 5.
console.log("\nmultiplos de 3 o 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}
