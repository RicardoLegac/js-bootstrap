let persona = {
    nombre: 'Ricardo',
    apellido: 'Leguizamon',
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona.nombreCompleto());

let persona2 = new Object(); //CREAMOS NUEVO OBJETO EN MEMORIA

persona2.nombre = 'Gianna';

//ACCEDER A PROPIEDADES COMO UN ARRAY

console.log(persona['apellido']);

//FOR IN 

for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

//ELIMINAR UNA PROPIEDAD 

delete persona.nombre; 