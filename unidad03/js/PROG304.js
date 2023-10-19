let usuario1 = {
    nombre: 'Mario',
    apellido: 'Blasco',
    }
let usuario2 = {
    nombre: 'Blanca',
    apellido: 'Blasco',
    curso: '2BACH',
    }
function intersectObjects(obj1, obj2){
    for( let key in obj2 ){
        if(key in a){
            return false;
        }
    }
    return true;
}
console.log( intersectObjects(usuario1, usuario2) );