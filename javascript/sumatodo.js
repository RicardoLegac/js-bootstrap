function sumartodo(){
    let suma=0;
    for(let i=0;i<arguments.length;i++){
        suma += arguments[i];
    }
    return suma;
}
console.log(sumartodo(4,5,6));