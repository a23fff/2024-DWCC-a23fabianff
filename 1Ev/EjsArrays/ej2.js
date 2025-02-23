const frutas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];

// Función para mostrar el array
const mostrarFrutas = () => console.log(frutas.join(', '));

console.log("Array inicial:");
mostrarFrutas();

// a. Eliminar las manzanas
frutas.splice(frutas.indexOf('mazás'), 1);
console.log("\nDespués de eliminar las manzanas:");
mostrarFrutas();

// b. Añadir naranjas y sandía detrás de los plátanos
const indicePlatanos = frutas.indexOf('plátanos');
frutas.splice(indicePlatanos + 1, 0, 'laranxas', 'sandía');
console.log("\nDespués de añadir naranjas y sandía:");
mostrarFrutas();

// c. Quitar los kiwis y poner en su lugar cerezas y nísperos
const indiceKiwis = frutas.indexOf('kiwis');
frutas.splice(indiceKiwis, 1, 'cereixas', 'nésperas');
console.log("\nDespués de reemplazar kiwis por cerezas y nísperos:");
mostrarFrutas();