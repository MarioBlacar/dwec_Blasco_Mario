function moverDerecha(e) {
    let divImagenes = document.querySelector(".images");
    let imagenes = document.querySelectorAll(".images img");
    divImagenes.prepend(imagenes[4]);
}

let boton = document.getElementById("btn");
boton.addEventListener('click', moverDerecha);