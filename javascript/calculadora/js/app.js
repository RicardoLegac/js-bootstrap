console.log('xd');
function sumar(){
    console.log('entro en sumar');
    const forma = document.getElementById('forma');
    let A = forma['operandoA'];
    let B = forma['operandoB'];
    let resultado = A.value + B.value;
    if (!isNaN(resultado)){
        alert("That isn't a valid number!");
        console.log('isnan');
    }else{
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    }
    

}