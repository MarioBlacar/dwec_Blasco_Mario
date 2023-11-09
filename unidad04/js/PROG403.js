let numbers = document.getElementById("numbers");

for(let contador=1; contador<=30; contador++){
    let elemento = document.createElement("span");
    elemento.classList.add("number");
    elemento.textContent = contador;
    numbers.append(elemento);
}
// ---------------------------------------------------------------------
let item = document.getElementById('months');
let months = "Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre".split(" ");
for(let contador=1;contador<=12;contador++){
    let elemento = document.createElement("div");
    elemento.classList.add("month");

    let subelemento1 = document.createElement("div");
    subelemento1.classList.add("month-number");
    subelemento1.textContent = contador;
    let subelemento2 = document.createElement("div");
    subelemento2.classList.add("month-name");
    subelemento2.textContent = months[contador-1];

    elemento.append(subelemento1);
    elemento.append(subelemento2);
    item.append(elemento); 
}