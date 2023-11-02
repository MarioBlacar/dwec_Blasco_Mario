let numeros = [1, 12, 13, 15, 20, 22, 23, 43];

function createPow( arr, pow ){
    return arr.map(item => item**pow);
}

console.log(createPow(numeros,2));