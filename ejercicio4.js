//declaracion numeros
const num1 = 10;
const num2 = 20;
const num3 = 30;

//Comparaciones mayor
let mayor = 0;
if (num1 > num2 && num1 > num3) {
    mayor = num1;
} else if (num2 > num1 && num2 > num3) { 
    mayor = num2;
} else { 
    mayor = num3;
}
console.log(mayor);

//comparacion menor
let menor = 0;
if (num1 < num2 && num1 < num3) {
    menor = num1;
} else if (num2 < num1 && num2 < num3) { 
    menor = num2;
} else { 
  menor = num3;
}
console.log(menor);

//comprobar si num1 es par o impar 
if (num1 % 2 === 0) {
    console.log("num1 es par.");
} else {
    console.log("num1 es impar.");
}

//comprobar num2 es par o impar
if (num2 % 2 === 0) {
    console.log("num2 es par.");
} else {
    console.log("num2 es impar.");
}

//comprobar num3 es par o impar
if (num3 % 2 === 0) {
    console.log("num3 es par.");
} else {
    console.log("num3 es impar.");
}

//comprobar num1 es multiplo de 5
if (num1 % 5 === 0) {
    console.log("num1 es múltiplo de 5.");
} else {
    console.log("num1 no es múltiplo de 5.");
}

//comprobar num2 es multiplo de 5
if (num2 % 5 === 0) {
    console.log("num2 es múltiplo de 5.");
} else {
    console.log("num2 no es múltiplo de 5.");
}

//comprobar num3 es multiplo de 5
if (num3 % 5 === 0) {
    console.log("num3 es múltiplo de 5.");
} else {
    console.log("num3 no es múltiplo de 5.");
}