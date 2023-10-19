let usuario = {
    nombre: 'Mario',
    apellido: 'Blasco',
    };
function cloneObject(obj){
    return {...obj};
};
let clone = cloneObject(usuario);
console.log( clone );