// 1. Acceder ao innerHTML, innerText e textContent da etiqueta "Escolle sexo"
const labelSexo = document.querySelector('label:nth-of-type(4)');
console.log('innerHTML de etiqueta sexo:', labelSexo.innerHTML);
console.log('innerText de etiqueta sexo:', labelSexo.innerText);
console.log('textContent de etiqueta sexo:', labelSexo.textContent);

// 2. Acceder ao valor do primeiro input de sexo
const primeiroInputSexo = document.querySelector('input[name="sexo"]');
console.log('Valor do primeiro input de sexo:', primeiroInputSexo.value);

// 3. Acceder ao valor do sexo seleccionado
const sexoSeleccionado = document.querySelector('input[name="sexo"]:checked');
console.log('Valor do sexo seleccionado:', sexoSeleccionado.value);

// 4. Acceder ao texto de cada elemento da lista
const elementosLista = document.querySelectorAll('ul li');
console.log('Texto de cada elemento da lista:');
elementosLista.forEach(elemento => {
    console.log(elemento.textContent);
});

// 5. Contar cantos elementos li hai
const cantidadeElementos = document.querySelectorAll('li').length;
console.log('Número de elementos li:', cantidadeElementos);

// 6. Acceder ao valor do atributo data-widget-name
const elementoWidget = document.querySelector('[data-widget-name]');
console.log('Valor do atributo data-widget-name:', elementoWidget.getAttribute('data-widget-name'));

