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