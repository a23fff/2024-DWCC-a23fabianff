const buscarPatron = (texto, patron) => {
    texto = texto.toLowerCase();
    patron = patron.toLowerCase();
    let contador = 0;
    let pos = 0;
    
    while (pos <= texto.length - patron.length) {
        let coincide = true;
        for (let i = 0; i < patron.length; i++) {
            if (texto[pos + i] !== patron[i]) {
                coincide = false;
                break;
            }
        }
        if (coincide) {
            contador++;
        }
        pos++;
    }
    return contador;
};

console.log(buscarPatron("000111101000ABCHA", "00")); // Debe devolver 4