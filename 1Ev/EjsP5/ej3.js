function enmascarar(numeros) {
    if (numeros.length <= 4) {
        return numeros;
    }
    return '*'.repeat(numeros.length - 4) + numeros.slice(-4);
}
console.log(enmascarar("1234123412347777"));