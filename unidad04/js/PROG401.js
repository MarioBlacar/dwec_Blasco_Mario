let numbers = document.getElementById("numbers");

for(let contador=1; contador<=30; contador++){
    numbers.innerHTML += `<span class='number'>${contador}</span>`;
}

