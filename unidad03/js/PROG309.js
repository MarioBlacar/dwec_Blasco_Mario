let cadena = prompt ("escriba la sentencia por la cual desea quitar las vocales existentes: ");
function removeVowels(str){
    let resultado="";
    for ( let char of str.toLowerCase() ) {
        if(!"aeiou".includes(char)){
            resultado += char;
        }
    }
    return(resultado);
}

alert( removeVowels(cadena) );
