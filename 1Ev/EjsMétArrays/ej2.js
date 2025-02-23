const numeros = [5, 2, 8, 1, 9];

const valorMin = numeros.reduce((min, num) => Math.min(min, num));
console.log(valorMin); // 1