let usuario1 = {
  nombre: "Mario",
  apellido: "Blasco",
  curso: undefined,
};
function removeUndefined(a) {

  for (let key in a) {
    if (a[key] === undefined) {
      delete a[key];
    }
  }
  return a;
}
console.log(removeUndefined(usuario1));
