// Engadir o número de descendentes

function contarDescendentes(ul) {
    const lis = ul.children;
    
    for (let li of lis) {
        const childUl = li.querySelector('ul');
        if (childUl) {
            const count = childUl.getElementsByTagName('li').length;
            li.firstChild.textContent += ` [${count}]`;
            contarDescendentes(childUl);
        }
    }
}

const lista = document.getElementById('listaAnimais');
contarDescendentes(lista);
