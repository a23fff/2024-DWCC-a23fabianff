const lista = document.getElementById('lista');

function agregarElemento() {
    const texto = document.getElementById('itemInput').value;

    if (texto === '') {
        return;
    }

    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = texto;

    // Añadir botón de borrado a cada li
    const removeButton = document.createElement('button');
    removeButton.textContent = "[x]";
    removeButton.classList.add('remove-button');
    nuevoElemento.append(removeButton);

    lista.append(nuevoElemento);
    
    document.getElementById('itemInput').value = "";
    borrarTodo();
}

function borrarElemento() {
    lista.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-button') && window.confirm("¿Seguro que deseas borrar este producto de la lista?")) {
          e.target.closest('li').remove();
        }
    });

} borrarElemento();

function borrarTodo() {
    const borrarTodoButton = document.querySelector('.borrarTodo-button');

    if (lista.childElementCount === 0) {
        if (borrarTodoButton) {
            borrarTodoButton.remove();
        }
    } else {
        if (!borrarTodoButton) {
            const nuevoBoton = document.createElement('button');
            nuevoBoton.textContent = "Borrar Todo";
            nuevoBoton.classList.add('borrarTodo-button');

            nuevoBoton.addEventListener('click', () => {
                if (window.confirm("¿Seguro que quieres borrar todos los elementos de la lista de la compra?")) {
                    lista.innerHTML = '';
                    borrarTodo();
                }
            });

            document.getElementById('lista-container').append(nuevoBoton);
        }
    }
}

function filtrar() {
    const filtroInput = document.getElementById('filtroInput');
    
    const elementos = lista.getElementsByTagName('li');
    
    const textoFiltro = filtroInput.value.toLowerCase();
    
    for (const elemento of elementos) {
        const textoElemento = elemento.textContent.toLowerCase();
        
        if (textoElemento.includes(textoFiltro)) {
            elemento.style.display = '';
        } else {
            elemento.style.display = 'none';
        }
    }
}

document.getElementById('filtroInput').addEventListener('input', filtrar);

window.onload = function () {
    borrarTodo();
};