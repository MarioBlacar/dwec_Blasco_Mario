let item = document.getElementById("months");
let months =
  "Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre".split(
    " "
  );
for (let contador = 1; contador <= 12; contador++) {
  item.innerHTML += `<div class='month'>
    <div class='month-number'>${contador}</div>
    <div class='month-name'>${months[contador - 1]}</div>
    </div>`;
}
