class Persona{
    static contadorPersona = 0; //atributo de nuestra clase! 

    constructor(nombre,apellido){ //se acostumbran en las propiedades del constructor se utilize '_' antes del nombre de la propiedad
        this._nombre=nombre;
        this._apellido=apellido;
        this.idPersona = Persona.contadorPersona++;
    }
    get nombre(){ //para obtener el atributo nombre
        return this._nombre;
    }
    set nombre(nombre){ //para modificar el atributo nombre
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
    //sobrescribimos OBject!
    toString(){
        //se aplica polimorfismo! 
        return this.idPersona + ' ' + this._nombre + " " + this._apellido;
    }
}
class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido); //llamar el constructor de la clase Padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    //SOBREESCRITURA
    /*nombreCompleto(){
        return this._nombre + ' ' + this._apellido + ' ' + this._departamento;
    }*/

    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._departamento;
    }
}
let persona1 = new Persona('Ricardo','Leguizamon'); //si no se define un constructor, JavaScript agrega un vacio automatico
console.log(persona1); 

persona1.nombre= 'Gianna'; //con el metodo set!
console.log(persona1.nombre);

let empleado = new Empleado('Rick','Legac','Ing');
console.log(empleado.toString());

let persona2 = new Persona('Gianna', 'Ozuna');
console.log(persona2.toString())