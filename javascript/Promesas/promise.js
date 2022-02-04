"use strict";
let miPromesa = new Promise((resolver,rechazar) => {
    let expresion = true;
    if(expresion){
        resolver('Resuelto');
    }else{
        rechazar('Error');
    }

});
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)

); //los argumentos son funciones de tipo flecha 

//COMO COMUNMENTE VAMOS A ENCONTRAR: 