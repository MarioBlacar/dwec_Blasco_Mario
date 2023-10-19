let nombres = ["Mario", "Blanca", "Paco", "Victor"];

function sendMessage(arr){
    resultado = arr.forEach(element => {
        return(`Hola, ${element}, bienvenido al curso de DWEC`);
    });

}
alert( sendMessage(nombres) );