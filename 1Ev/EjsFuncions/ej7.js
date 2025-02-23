// 7. Función para validar DNI
const validarDNI = (dni) => {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const numero = parseInt(dni.slice(0, -1));
    const letra = dni.slice(-1).toUpperCase();
    return letras[numero % 23] === letra;
};

console.log(validarDNI("12345678W")); // Comprobar validez
console.log(validarDNI("87654321T")); // Comprobar validez