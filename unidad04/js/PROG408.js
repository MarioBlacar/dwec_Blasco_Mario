function shuffle(array) {
    arrayFinal = [];
    array.forEach(element => {
        console.log(Math.round(Math.random()));
        if (Math.round(Math.random())) {
            
            arrayFinal.push(element);
        } else {
            arrayFinal.unshift(element);
        }
    });
    return arrayFinal;
};

function reordenar(e) {
    let divImagenes = document.querySelector(".images");
    let imagenes = document.querySelectorAll(".images img");
    shuffle(imagenes);
    imagenes.forEach(element => {
        divImagenes.prepend(element);
    });
}

let boton = document.getElementById("btn");
boton.addEventListener('click', reordenar);