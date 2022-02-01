class Computadora{
    static contadorComputadora = 0;
    constructor(nombre,monitor,teclado,raton){
        this._nombre=nombre;
        this._monitor=monitor;
        this._teclado=teclado;
        this._raton=raton;
        this._idComputadora = Computadora.contadorComputadora++;
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

class Raton{

}