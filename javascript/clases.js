class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}

let persona1 = new Persona('Ricardo','Leguizamon'); //si no se define un constructor, JavaScript agrega un vacio automatico
console.log(persona1);