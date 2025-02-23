// 4. Función que calcula a media
const calcularMedia = (...numeros) => {
    return numeros.reduce((suma, num) => suma + num, 0) / numeros.length;
};

console.log(calcularMedia(1, 2, 3, 4)); // Debería devolver 2.5
console.log(calcularMedia(10, 10, 10)); // Debería devolver 10