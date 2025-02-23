function indices(elemento, arrayElementos) {
    return arrayElementos.reduce((acc, curr, index) => {
        if (curr === elemento) {
            acc.push(index);
        }
        return acc;
    }, []);
}

const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
console.log(indices(1, numeros)); // [0, 3, 5, 9]