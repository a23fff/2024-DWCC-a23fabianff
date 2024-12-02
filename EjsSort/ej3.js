function ordenarNotas(notas) {
    return notas.sort((a, b) => a - b);
 }
 
 // Probas
 const notas = [4, 8, 3, 10, 5];
 console.log('Notas ordenadas:', ordenarNotas(notas)); // [3, 4, 5, 8, 10]