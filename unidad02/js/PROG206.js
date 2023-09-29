let numero1 = prompt("escriba un numero");
let numero2 = prompt("escriba otro numero");;
let datos;

for(let i=0;i<=numero2;i++){
    let resultado=numero1 * i;
    datos +=  (`${numero1} * ${i} y su área es ${resultado}.\n`);
}


alert(datos);