class Persona{
    static contadorPersonas = 0 ;

    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = Persona.contadorPersonas++
    }

    get getIdPersona(){
        return this._idPersona;
    }
    get getNombre(){
        return this._nombre;
    }
    get getApellido(){
        return this._apellido;
    }
    get getEdad(){
        return this._edad;
    }
    set setEdad(edad){
        this._edad = edad; 
    }
    toString(){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0 ;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._sueldo = sueldo;
        this._idEmpleado = Empleado.contadorEmpleados++;
    }
    get getIdEmpleado(){
        return this._idEmpleado;
    }
    get getSueldo(){
        return this._sueldo;
    }
    set setSueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.toString() + ' ' + this._idEmpleado;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0 ;
    
    constructor(nombre,apellido,edad){
        super(nombre,apellido,edad);
        this._idCliente = Cliente.contadorClientes++;
        this._fecha = fecha();
    }
    get getIdCliente(){
        return this._idCliente;
    }
    get getFechaRegistro(){
        return this._fecha;
    }
    set setFechaRegistro(fecha){
        this._fecha = fecha;
    }
    toString(){
        super.toString() + ' ' + this._fecha; 
    }
}
function fecha(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = dd + '/' + mm+ '/'+yyyy;
    return today;
}


let persona = new Persona('Ricardo','Leguizamon',24);
console.log(persona);
let persona1 = new Persona('Gianna','Ozuna',2);
console.log(persona1);

let empleado = new Empleado('Rick','Legac',24,25000);
console.log(empleado);