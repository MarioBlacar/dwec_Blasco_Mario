let str = prompt("escriba un numero");
let baseFrom = prompt("escriba la base de ese numero");
let baseTo = prompt("escriba la base a calcular");

  function convertBase(str, baseFrom, baseTo) {
    return parseInt(str,baseFrom).toString(baseTo);
  }
  //  convertBase = (str,baseFrom,baseTo) => parseInt(str,baseFrom).toString(baseTo);
  console.log(convertBase(str, baseFrom, baseTo));
  