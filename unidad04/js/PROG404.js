let parrafos = document.getElementById("parrafos");
let penultimoEnlace = document.getElementById("penultimo-enlace");
let linksGoogleEs = document.getElementById("links-google-es");
let palabrasSegundoParrafo = document.getElementById(
  "palabras-segundo-parrafo"
);

parrafos.textContent = document.getElementsByTagName("p").length;
penultimoEnlace.textContent =
  document.getElementsByTagName("a")[
    document.getElementsByTagName("a").length - 2
  ].href;
linksGoogleEs = document.querySelectorAll(
  '[href="https://www.google.es"]'
).length;
palabrasSegundoParrafo.textContent = document
  .getElementsByTagName("p")[2]
  .textContent.trim().split(" ").length;
