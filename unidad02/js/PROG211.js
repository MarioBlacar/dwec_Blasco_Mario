let numero;
while (numero < -Infinity || numero > Infinity || numero != "") {
  numero = prompt("escriba un numero positivo");
}

let datos = `El perímetro del círculo de radio ${radio} es ${perimetro} y su área es ${area}.`;
alert(datos);
