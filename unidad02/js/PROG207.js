let numero = prompt("escriba un numero");
let datos = '\n';

for(let i=0;i<numero;i++){
    for(let j=0;j<=i;j++){
        datos +=  (`*`);
    }
    datos += (`\n`);
}

alert(datos);