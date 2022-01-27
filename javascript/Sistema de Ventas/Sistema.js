class Producto{
    static contadorProductos = 0;
    constructor(nombre,precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = Producto.contadorProductos++;
    }
    get getIdProducto(){
        return this._idProducto;
    }
    get getNombre(){
        return this._nombre;
    }
    get getPrecio(){
        return this._precio;
    }
}