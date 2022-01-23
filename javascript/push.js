let autos=['Mercedes','BMW'];
for(let i=0;i<autos.length;i++){
    console.log(autos[i]);
}
autos.push('Wolswagen');
console.log(autos);
console.log(Array.isArray(autos) ? "es un array": "no es un array");

/*funcion de tipo expresion*/
let sumar = function(a,b){ return (a+b)}; 
console.log(sumar(2,3))