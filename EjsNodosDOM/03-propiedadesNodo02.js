// 1. Número de ligazóns da páxina
const todasLigazons = document.querySelectorAll('a');
console.log('Número total de ligazóns:', todasLigazons.length);

// 2. Dirección da penúltima ligazón
const penultimaLigazon = todasLigazons[todasLigazons.length - 2];
console.log('Dirección da penúltima ligazón:', penultimaLigazon.href);

// 3. Número de ligazóns que apuntan a http://proba
const ligazonsProba = document.querySelectorAll('a[href="http://proba"]');
console.log('Número de ligazóns a http://proba:', ligazonsProba.length);

// 4. Número de ligazóns do terceiro parágrafo
const terceiroParagrafo = document.querySelectorAll('p')[2];
const ligazonsTerceiroParagrafo = terceiroParagrafo.querySelectorAll('a');
console.log('Número de ligazóns no terceiro parágrafo:', ligazonsTerceiroParagrafo.length);

// 5. Modificar o estilo das ligazóns que apuntan a http://proba
ligazonsProba.forEach(ligazon => {
    ligazon.style.color = 'orange';
});

// Función auxiliar para mostrar información adicional (opcional)
function mostrarDetallesLigazons() {
    console.log('\nDetalles de todas as ligazóns:');
    todasLigazons.forEach((ligazon, index) => {
        console.log(`Ligazón ${index + 1}:`, {
            href: ligazon.href,
            texto: ligazon.textContent,
            paragrafo: ligazon.closest('p').textContent.substring(0, 50) + '...'
        });
    });
}

// Chamar á función auxiliar para ver máis detalles
mostrarDetallesLigazons();