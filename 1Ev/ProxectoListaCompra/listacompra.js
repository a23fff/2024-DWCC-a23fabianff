const lista = document.getElementById('lista');

function agregarElemento(texto = null) {
    const inputTexto = texto || document.getElementById('itemInput').value;

    if (inputTexto === '') {
        return;
    }

    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = inputTexto;

    // Añadir botón de borrado a cada li
    const removeButton = document.createElement('button');
    removeButton.textContent = "[x]";
    removeButton.classList.add('remove-button');
    nuevoElemento.append(removeButton);

    lista.append(nuevoElemento);

    if (!texto) {
        document.getElementById('itemInput').value = ""; 
        guardarEnLocalStorage();
    }

    borrarTodo();
}

function borrarElemento() {
    lista.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-button') && window.confirm("¿Seguro que deseas borrar este producto de la lista?")) {
            e.target.closest('li').remove();
            guardarEnLocalStorage();
        }
    });
}
borrarElemento();

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
                    guardarEnLocalStorage();
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

function cargarDesdeLocalStorage() {
    const elementosGuardados = JSON.parse(localStorage.getItem('listaCompra')) || [];
    elementosGuardados.forEach(x => agregarElemento(x));
}

function guardarEnLocalStorage() {
    const elementos = Array.from(lista.querySelectorAll('li')).map(li => li.firstChild.textContent);
    localStorage.setItem('listaCompra', JSON.stringify(elementos));
}

document.getElementById('filtroInput').addEventListener('input', filtrar);
document.getElementById('addButton').addEventListener('click', () => agregarElemento());
document.getElementById('clearAllButton').addEventListener('click', () => borrarTodo());

window.onload = function () {
    cargarDesdeLocalStorage();
    borrarTodo();
};
