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
        return `nombre: ${this._nombre}, monitor: ${this._monitor}, raton: ${this._raton}, teclado: ${this._teclado}`
    }
}

class DispositivoEntrada{

    constructor(tipoentrada,marca){
        this._marca= marca;
        this._tipoentrada = tipoentrada;
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
    constructor(){
        super(tipoentrada,maca);
        this._idRaton = Raton.contadorRatones++;
    }
    get getIdRaton(){
        return this._idRaton;
    }
    toString(){
        return `tipo entrada: ${this._tipoentrada}, raton: ${this._raton}, marca: ${this._marca}`;
    }
}