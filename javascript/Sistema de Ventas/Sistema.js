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
class Orden{ //es de agregacion no de extends
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = Orden.contadorOrdenes++;
        this._productos =[];
        this._contadorProductosAgg  = 0;
    }
    get getIdOrden(){
        return this._idOrden;
    }
    agregarProductos(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgg++] = producto;
        }else{
            console.log('No se pueden agregar mas productos';)
        }
    }
}