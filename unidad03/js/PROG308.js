let cadena = prompt ("escriba la sentencia por la cual desea saber el numero de letras existentes: ");

function countLetters(str){
    let resultado=0;
    for ( let char of str ) {
        if(char != " "){
            resultado++;
        }
    }
    return(resultado);
}

alert( countLetters(cadena) );
