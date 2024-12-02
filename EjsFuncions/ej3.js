// 3. Función frecha que suma todos os valores
const sumarTodo = (...numeros) => numeros.reduce((suma, num) => suma + num, 0);

console.log(sumarTodo(1, 2, 3)); // Debería devolver 6
console.log(sumarTodo(10, -5, 3, 2)); // Debería devolver 10