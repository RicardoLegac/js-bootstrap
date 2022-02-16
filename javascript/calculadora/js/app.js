console.log('xd');
function sumar(){
    const forma = document.getElementById('forma');
    let A = forma('operandoA');
    let B = forma('operandoB');
    let resultado = A.value + B.value;
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;

}