//a
let numeroAleatorioEntre0e3 = Math.floor(Math.random() * 4); 
console.log(numeroAleatorioEntre0e3);

//b
let numeroAleatorioEntre1e3 = Math.floor(Math.random() * 3) + 1;
console.log(numeroAleatorioEntre1e3);

//c
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Exemplo de uso: número aleatorio entre 5 e 10 (incluídos)
console.log(numeroAleatorio(5,10));




