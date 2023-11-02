let nombres = ["Mario", "Blanca", "Paco", "Victor"];
let nombres2 = ["Mario", "Paco"];

function isEqualArr(arr1, arr2){
    resultado = true;
    arr1.forEach(element => {
        if(!arr2.some(element)){
            resultado =  false;
        }
    });
    return resultado;
}
alert( isEqualArr(nombres, nombres2) );