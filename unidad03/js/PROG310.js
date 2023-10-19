let cadena = prompt ("Escriba una cadena en la cual quiera saber la poscion en el abecedario de cada letra: ");
function replaceWithPosition(str){
    let resultado="";
    for ( let char of str ) {
        char.toLowerCase();
        resultado += parseInt(char,36) - 9;
        resultado += " ";
    }
    return(resultado);
}
alert( replaceWithPosition(cadena) );
