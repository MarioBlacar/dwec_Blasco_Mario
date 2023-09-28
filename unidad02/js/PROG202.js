let nombreUsuario = prompt("escriba el nombre de usuario");
let nota1 = prompt("escriba la nota de su primer examen");
let nota2 = prompt("escriba la nota de su segundo examen");
let notaMedia = (nota1+nota2)/2;

let datos =  (`Hola ${nombreUsuario}, la nota media de tus exámenes es ${notaMedia}.`);
alert(datos);

