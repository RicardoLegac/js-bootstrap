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

//CONCATENAR PROPIEDAD DE UN OBJETO

for (propiedad in persona){
    console.log(persona[propiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray)

let personaString = JSON.stringify(persona);
console.log(personaString);

//OBTENER INFORMACION DE UN OBJETO: esto simplifica usar una funcion.

let persona3 = {
    nombre: 'Marlyn',
    apellido: 'Candia',
    idioma: 'es',
    get nombreyapellido(){
        return this.nombre + " "  + this.apellido;
    },
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(idiomanuevo){
        return this.idioma = idiomanuevo.toUpperCase();
    }

}
console.log(persona3.nombreyapellido);
for( propiedad in persona3){
    console.log(persona3[propiedad]);
}
persona3.lang = 'en';
//aqui automaticamente convertimos en mayuscula:
console.log(persona3.lang);
