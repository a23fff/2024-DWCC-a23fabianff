const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const fechaActual = new Date();
const fecha25Julio = new Date(fechaActual.getFullYear(), 6, 25);
console.log(`El 25 de julio de ${fechaActual.getFullYear()} es ${diasSemana[fecha25Julio.getDay()]}`);

