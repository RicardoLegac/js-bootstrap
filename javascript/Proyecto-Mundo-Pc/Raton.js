

class DispositivoEntrada{

    constructor(tipoentrada,marca){
        this._tipoentrada = tipoentrada;
        this._marca= marca;
        
    }
    get getMarca(){
        return this._marca;
    }
    set setMarca(marca){
        this._marca = marca;
    }
    get getTipoentrada(){
        return this._tipoentrada;
    }
    set setTipoentrada(tipoentrada){
        this._tipoentrada = tipoentrada;
    }


}

class Raton extends DispositivoEntrada{
    static contadorRatones=0;
    constructor(tipoentrada,marca){
        super(tipoentrada,marca);
        this._idRaton = Raton.contadorRatones++;
    }
    get getIdRaton(){
        return this._idRaton;
    }
    toString(){
        return `tipo entrada: ${this._tipoentrada}, raton: ${this._idRaton}, marca: ${this._marca}`;
    }
}
class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;
    constructor(tipoentrada,marca){
        super(tipoentrada,marca);
        this._idTeclado = Teclado.contadorTeclado++;
    }
    get getIdTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `tipo entrada: ${this._marca}, marca: ${this._marca}, idTeclado: ${this._idTeclado}`;
    }
}
let raton = new Raton('USB', 'HP');
console.log(raton.toString());


class Monitor{
    static contadorMonitor =0;
    constructor(marca,tamano){
        this._idMonitor=Monitor.contadorMonitor++;
        this._marca=marca;
        this._tamano=tamano;
    }
    get getMarca(){
        return this._marca;
    }
    get getTamano(){
        return this._tamano;
    }
    set setMarca(marca){
        this._marca = marca;
    }
    set setTamano(tamano){
        this._tamano= tamano;
    }
    toString(){
        return `idMonitor: ${this._idMonitor} marca: ${this._marca} tamano: ${this._tamano}`;
    }
}

class Computadora{
    static contadorComputadora = 0;
    constructor(nombre,monitor,teclado,raton){
        this._nombre=nombre;
        this._monitor=monitor;
        this._teclado=teclado;
        this._raton=raton;
        this._idComputadora = Computadora.contadorComputadora++;
    }
    get getNombre(){
        return this._nombre;
    }
    get getMonitor(){
        return this._monitor;
    }
    get getTeclado(){
        return this._teclado;
    }
    get getRaton(){
        return this._raton;
    }
    get getIdComputadora(){
        return this._idComputadora;
    }
    set setNombre(nombre){
        this._nombre=nombre;
    }
    set setMonitor(monitor){
        this._monitor=monitor;
    }
    set setRaton(raton){
        this._raton=raton;
    }
    toString(){
        return `nombre: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`
    }
}
let monitor1 = new Monitor('Viewsonic',22);
let teclado1 = new Teclado('USB','HAVIT');
let raton1 = new Raton('USB','RAZER');
let computadora = new Computadora('HP',monitor1,teclado1,raton1);
console.log(computadora.toString());

class Orden{
    static contadorOrden =0;
    constructor(){
        this._idOrden = Orden.contadorOrden++;
        this._computadora =  [];
    }

    get getIdOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadora.push(computadora);
    }
}