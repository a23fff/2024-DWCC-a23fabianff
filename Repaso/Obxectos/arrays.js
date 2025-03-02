// Crea unha función que reciba un elemento e un array como parámetros. A función
// debe devolver un novo array que conteña os índices onde aparece ese elemento no
// array

const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];

function lugares(numero, arrayNumeros) {
  let indices = []; // Array para almacenar los índices donde aparece el número

  // Recorremos el array y almacenamos los índices donde aparece el número
  arrayNumeros.forEach((valor, indice) => {
    if (valor === numero) {
      indices.push(indice);
    }
  });

  // Mostramos el resultado
  console.log(
    `El número ${numero} aparece en ${indices.length} posiciones: ${indices}`
  );

  // Devolvemos el array de índices
  return indices;
}

// Llamada a la función
//lugares(1, numeros);

// Array inicial
const froitas = ["peras", "mazás", "kiwis", "plátanos", "mandarinas"];

console.log("Inicial:", froitas.join(", ")); // Mostrar estado inicial

// a) Eliminar "mazás"
froitas.splice(1, 1);

// b) Insertar "laranxas" y "sandías" después de "plátanos" (índice 3)
froitas.splice(4, 0, "laranxas", "sandías");

// c) Reemplazar "kiwis" por "cereixas" y "nésperas" (índice 2)
froitas.splice(2, 1, "cereixas", "nésperas");

// Mostrar resultado final
console.log("Final:", froitas.join(", "));
