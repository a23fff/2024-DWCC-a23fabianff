// Cando se executan estas liñas:
// button.addEventListener("click", () => console.log("1"));
// button.removeEventListener("click", () => console.log("1"));

// ¡NON SUCEDERÁ NADA! 
// removeEventListener falla porque as funcións de devolución de chamada son instancias diferentes
// Aínda que parecen iguais, non son a mesma referencia de función

// Forma correcta de eliminar un detector de eventos específico:
const manexador = () => console.log("1");
button.addEventListener("click", manexador);
button.removeEventListener("click", manexador);

// Para a segunda parte:
// button.onclick = () => console.log(2);
// Isto rexistrará "2" cando se faga clic no botón
// Substituirá calquera manexador onclick anterior

// Resumo de manexo de eventos:
// 1. addEventListener crea un novo detector de eventos
// 2. removeEventListener require a mesma referencia de función exacta
// 3. A asignación de propiedade onclick substitúe os manexadores anteriores

// Resumen:
// Cando se intenta eliminar un detector de eventos con funcións anónimas diferentes, non se consegue, xa que non son a mesma referencia.
// Para eliminar un detector de eventos, é necesario usar a mesma referencia de función.
// Ao usar onclick, substitúese calquera manexador de eventos anterior.
// É importante gardar a referencia da función se se quere eliminar un detector de eventos específico posteriormente.