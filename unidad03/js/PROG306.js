let str = prompt("escriba un numero");
let baseFrom = prompt("escriba la base de ese numero");
let baseTo = prompt("escriba la base a calcular");

  function convertBase(str, baseFrom, baseTo) {
    let resultado = str / (10 ^ baseFrom) * (10 ^ baseTo);
    return resultado;
  }
  console.log(convertBase(str, baseFrom, baseTo));
  