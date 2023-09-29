let mayor;
let menor;
for(let contador=1;contador<=5;contador++){
    let numero = prompt(`escriba un numero ${contador}`);
    if(numero<menor){
        menor=numero;
    }else if(numero>mayor){
        mayor=numero;
    }
}

let datos =  (`El mayor número es ${mayor} y el menor ${menor}.`);
alert(datos);