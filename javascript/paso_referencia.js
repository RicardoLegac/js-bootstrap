/*paso por referencia*/
const persona= {
    nombre: 'Ricardo',
    apellido: 'Leguizamon'
}

function cambioporreferencia(persona){
    persona.nombre = 'Gianna';
    persona.apellido = 'Ozuna';

}
cambioporreferencia(persona);
console.log(persona);