let cadena = prompt(
  "escriba la sentencia por la cual desea saber el numero de letras existentes: "
);

function countLetters(str) {
  let letterCount = {};
  for (let char of str) {
    letterCount[char] = char in letterCount ? letterCount[char] + 1 : 1;
  }
  return letterCount;
}

console.log(countLetters(cadena));
