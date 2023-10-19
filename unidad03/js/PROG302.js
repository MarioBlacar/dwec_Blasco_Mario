let usuario1 = {
    nombre: 'Mario',
    apellido: 'Blasco',
    };
let usuario2 = {
    nombre: 'Blanca',
    apellido: 'Blasco',
    };
function mergeObjects(obj1, obj2){
    let resultado = {
        ...obj1,
        ...obj2,
    };
    return resultado;
};
console.log( mergeObjects(usuario1, usuario2) );