// 5. Función minMax
const minMax = (array) => ({
    min: Math.min(...array),
    max: Math.max(...array)
});

console.log(minMax([1, 2, 3, 4, 5])); 