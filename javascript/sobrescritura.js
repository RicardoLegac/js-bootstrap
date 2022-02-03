"use strict";
class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}

let empleado1 = new Empleado('Juan', 3000);
console.log( empleado1.obtenerDetalles() );

let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
console.log( gerente1.obtenerDetalles() );

function ImprimirDetalles(persona){
    if(persona instanceof Empleado){
        console.log('es un objeto de tipo Empleado ');
    }
    if(persona instanceof Gerente){
        console.log('es un objeto de tipo Gerente');
    }
    return persona.obtenerDetalles(); //polimorfismo
    
}

console.log(ImprimirDetalles(empleado1));