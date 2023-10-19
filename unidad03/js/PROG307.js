let cadena = prompt ("escriba la sentencia por la cual desea saber el numero de vocales existentes: ");

function countVowels(str){
    let resultado=0;
    for ( let char of str ) {
        if(char == "a" ||
            char == "e" ||
            char == "i" ||
            char == "o" ||
            char == "u"){
            resultado++;
        }
    }
    return(resultado);
}
alert( countVowels(cadena) );
