// 2. Función frecha que devolve elementos impares
const numerosImpares = (array) => array.filter(num => num % 2 !== 0);

const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];
console.log(numerosImpares(arrayEntrada)); // Debe devolver [3, 5, 7, 23]