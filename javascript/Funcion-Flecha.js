"use strict";
let miFuncionFlecha = () =>{
    console.log('impresion dentro de la funcion flecha');
}

miFuncionFlecha();

//Funcion(); //Cannot acces 'Funcion' before initialization
let Funcion  = function() {
    console.log('impresion dentro de una funcion');
}

Funcion();


const funcionFlecha2 = () => {
    return ' un mensaje cualquiera ';
}
console.log(funcionFlecha2());