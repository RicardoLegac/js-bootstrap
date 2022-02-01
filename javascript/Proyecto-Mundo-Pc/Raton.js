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

