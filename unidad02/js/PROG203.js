let precioManzana = prompt("escriba el precio por kilo de manzanas");
let cantidadManzana = prompt("escriba la cantidad de manzanas");
let precioNaranja = prompt("escriba el precio por kilo de naranjas");
let cantidadNaranja = prompt("escriba la cantidad de naranjas");
let precioPlatano = prompt("escriba el precio por kilo de platanos");
let cantidadOPlatano = prompt("escriba la cantidad de platanos");

let totalKilos = cantidadManzana + cantidadNaranja + cantidadOPlatano;
let totalPrecio = precioManzana * 0.5 + precioNaranja * 0.3 + precioPlatano * 0.8;

let datos =  (`Has comprado un total de ${totalKilos} kilos de fruta y te ha costado ${totalPrecio} euros.`);
alert(datos);