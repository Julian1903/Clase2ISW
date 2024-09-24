const usuario = {
  nombre: 'Julian',
  apellido: 'GAete',
  edad: 21,
  direccion: {
    calle: 'Chillancito',
    numero: 'S/N',
    comuna: 'Cabrero',
    pais: 'Chile'
  },
  contactos: {
    telefono: '123456789',
    email: 'julianalejandroid@gmail.com',
    redesSociales: {
      instagram: '@julian.gaete.19',
    }
  },
  intereses: ['Programación', 'Música', 'Mecanica Automotriz']
};

//extraemos nombre apellido y direccion
const { nombre, apellido, direccion } = usuario;
const comuna = direccion.comuna;

//obetner 1er interes
const primerInteres = usuario.intereses[0];

//obtener email e insatgram
const email = usuario.contactos.email;
const instagram = usuario.contactos.redesSociales.instagram;

//sacamos y renombramos variables
const calleUsuario = usuario.direccion.calle;
const numeroUsuario = usuario.direccion.numero;

// Mostrar los resultados
console.log(nombre);        
console.log(apellido);      
console.log(comuna);        
console.log(primerInteres); 
console.log(email);       
console.log(instagram);   
console.log(calleUsuario);  
console.log(numeroUsuario);  
