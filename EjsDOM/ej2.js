// 1. Acceder ao elemento con id "input2"
let input2 = document.getElementById('input2');
console.log('input2:', input2);

// 2. Acceder á colección de parágrafos
let parrafos = document.getElementsByTagName('p');
console.log('Todos os parágrafos:', parrafos);

// 3. Acceder a todos os parágrafos dentro do div con id "lipsum"
let lipsum = document.getElementById('lipsum');
let parrafosLipsum = lipsum.getElementsByTagName('p');
console.log('Parágrafos dentro de #lipsum:', parrafosLipsum);

// 4. Acceder ao formulario
let formulario = document.querySelector('form');
console.log('Formulario:', formulario);

// 5. Acceder a todos os inputs
let inputs = formulario.getElementsByTagName('input');
console.log('Todos os inputs:', inputs);

// 6. Acceder só aos inputs con nome "sexo"
let inputsSexo = formulario.querySelectorAll('input[name="sexo"]');
console.log('Inputs con nome "sexo":', inputsSexo);

// 7. Acceder aos items da lista con clase "important"
let itemsImportantes = document.querySelectorAll('li.important');
console.log('Items da lista con clase "important":', itemsImportantes);
