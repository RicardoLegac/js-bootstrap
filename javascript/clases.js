class Persona{
    constructor(nombre,apellido){ //se acostumbran en las propiedades del constructor se utilize '_' antes del nombre de la propiedad
        this._nombre=nombre;
        this._apellido=apellido;
    }
    get nombre(){ //para obtener el atributo nombre
        return this._nombre;
    }
    set nombre(nombre){ //para modificar el atributo nombre
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Ricardo','Leguizamon'); //si no se define un constructor, JavaScript agrega un vacio automatico
console.log(persona1);

persona1.nombre= 'Gianna'; //con el metodo set!
console.log(persona1.nombre);