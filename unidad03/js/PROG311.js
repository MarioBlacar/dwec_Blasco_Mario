let len = prompt ("escriba la longitud de su cadena: ");
let min = prompt ("escriba el numero minimo en el que se pare la secuencia: ");
let max = prompt ("escriba el numero maximo en el que se pare la secuencia: ");

function ascendDescend( len, min, max ){
    let resultado="";
    let contador=0;
    do{
        for(let contadorAsc=min;contadorAsc<=max;contadorAsc++){
            if(contador <= len){
                resultado +=contadorAsc;
                contador++;
            }else{
                break;
            }
        }
        for(let contadorDes=max-1;contadorDes>=min;contadorDes--){
            if(contador <= len){
                resultado +=contadorDes;
                contador++;
            }else{
                break;
            }
        }
    }while(contador <= len);
    
    return(resultado);
}

alert( ascendDescend(len,min,max) );
