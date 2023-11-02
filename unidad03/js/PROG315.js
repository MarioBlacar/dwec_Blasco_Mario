let numeros = [1, 12, 13, 15, 20, 22, 23, 43];

function getOdd(arr){
    return arr.filter(item => item%2 !=0);
}

console.log(getOdd(numeros));