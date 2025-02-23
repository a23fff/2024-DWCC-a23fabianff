// 1. Acceder á táboa con id="age-table"
let tabla = document.getElementById('age-table');
console.log(tabla);


// 2. Acceder a todos os elementos label dentro da táboa
let labels = tabla.getElementsByTagName('label');
console.log(labels);

// 3. Acceder ao primeiro td da táboa
let primerTd = tabla.getElementsByTagName('td')[0];
console.log(primerTd);

// 4. Acceder ao formulario con name="search"
let formulario = document.getElementsByName('search')[0];
console.log(formulario);

 // 5. Acceder ao primeiro input do formulario anterior
let primerInput = formulario.getElementsByTagName('input')[0];
console.log(primerInput);

// 6. Acceder ao último input do formulario anterior
let inputs = formulario.getElementsByTagName('input');
let ultimoInput = inputs[inputs.length - 1];
console.log(ultimoInput);
