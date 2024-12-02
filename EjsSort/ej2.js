const dias = ['luns', 'martes', 'mércores', 'xoves', 'venres', 'sábado', 'domingo'];

// a. Días que empezan por 'm'
const diasM = dias.filter(dia => dia.startsWith('m'));
console.log('Días con m:', diasM);

// b. Algún día empeza por 's'
const haiS = dias.some(dia => dia.startsWith('s'));
console.log('Hai algún día que empece con s?:', haiS);

// c. Todos acaban en 's'
const todosS = dias.every(dia => dia.endsWith('s'));
console.log('Todos os días acaban en s?:', todosS);

// d. Primeiro día con 'm'
const primeiroM = dias.find(dia => dia.startsWith('m'));
console.log('Primeiro día que empeza por m:', primeiroM);

// e. Posición do primeiro día con 'm'
const posicionM = dias.findIndex(dia => dia.startsWith('m'));
console.log('Posición do array do primeiro día con m:', posicionM);

// f. Días en maiúsculas
const diasMaiusculas = dias.map(dia => dia.toUpperCase());
console.log('Días da semana en maiúsculas:', diasMaiusculas);