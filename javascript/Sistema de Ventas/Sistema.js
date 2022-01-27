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
    set setNombre(nombre){
        this._nombre = nombre;
    }
    set setPrecio(precio){
        this._precio = precio;
    }
    toString(){
        return `nombre: ${this._nombre} precio: ${this._precio} ID: ${this._idProducto}`;
    }
}