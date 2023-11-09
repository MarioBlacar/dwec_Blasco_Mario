let boton = document.getElementById("boton");
boton.addEventListener("click", (cambiarColor) => {
  let colores = "red blue green white purple brown grey".split(" ");
  let numero = Math.trunc(Math.random()*7);
  console.log(numero);
  document.body.style.backgroundColor = colores[numero];
});