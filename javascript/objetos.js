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
console.log(persona3.lang, persona3.idioma);
persona3.lang = 'en';
//aqui automaticamente convertimos en mayuscula llamando al metodo set:
console.log(persona3.lang);


/*SIEMPRE ES MEJOR  USAR CONSTRUCTOR */
//FUNCION CONSTRUCTOR DE OBJETOS DE TIPO PERSONA

function Persona(nombre='nombre',apellido='apellido',email='email'){
    //lado derecho es el parametro que estamos definiendo en nuestra funcion
    //lado izquierdo es la propiedad de nuestro objeto! 
    this.nombre= nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
    /*get this.nombrecom(){ ver como funciona esto cuando es constructores 
        return this.nombre + " " + this.apellido;
    }
    
    */
    this.nombrecompleto = this.nombre.concat(' ',this.apellido);
    
}

let padre = new Persona('RICARDO','LEGUIZAMON','ricklegac@gmail.com');
console.log(padre);

let objetoPersona = new Persona();
console.log(objetoPersona);

console.log(padre.nombreCompleto());
console.log(padre.nombrecompleto);

console.log(typeof padre.nombrecompleto);

let numero = new Number(1); 
let numero2 = 1;

console.log(typeof numero, numero ," __ ", typeof numero2, numero2)
