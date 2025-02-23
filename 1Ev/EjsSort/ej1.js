const persoas = [
    { nome: 'aaron', idade: 65, id: 1 },
    { nome: 'beth', idade: 2, id: 2 },
    { nome: 'ánxeles', idade: 13, id: 3 },
    { nome: 'daniel', idade: 3, id: 4 },
    { nome: 'ada', idade: 25, id: 5 },
    { nome: 'erea', idade: 1, id: 6 },
    { nome: 'navia', idade: 43, id: 7 },
    ];

// a. Array de persoas maiores (>18 anos)
const mayores = persoas.filter(p => p.idade > 18);

// b. Array solo con nomes
const nombres = persoas.map(p => p.nome);

// c. Array dos nomes das persoas maiores de idade
const nombresMayoresMayus = persoas
    .filter(p => p.idade > 18)
    .map(p => p.nome.toUpperCase());

// d. Array que conteña obxectos co id e nome das persoas
const idNomes = persoas.map(({id, nome}) => ({id, nome}));

console.log(idNomes);
