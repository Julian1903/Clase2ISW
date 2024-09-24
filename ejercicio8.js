//caracteristicas objeto persona
const persona = {
    nombre: 'julian',
    edad: 21,
    genero: 'masculino'
};

//imprimir datos persona
console.log('nombre:', persona.nombre);
console.log('edad:', persona.edad);
console.log('genero:', persona.genero);

//creacion caja
const caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 100,
    fotografias: 20,
    estado: 'nuevos'
};

//imprimir caja completa
console.log("\nContenido de la caja:", caja);

// imprimir cada objeto y que tipo de dato es
console.log('\ncauderno:', caja.cuadernos);
console.log('tipo de dato de cuadernos:', typeof caja.cuadernos);

console.log('\nlapices:', caja.lapices);
console.log('tipo de dato de lapices:', typeof caja.lapices);

console.log('\npapel:', caja.papel);
console.log('tipo de dato de papel:', typeof caja.papel);

console.log('\nfotografias:', caja.fotografias);
console.log('tipo de dato de fotografias:', typeof caja.fotografias);

console.log("\nestado:", caja.estado);
console.log('tipo de dato de estado:', typeof caja.estado);

