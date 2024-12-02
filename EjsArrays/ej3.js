function capitalizarPalabras(frase) {
    return frase.split(' ').map(palabra => 
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    ).join(' ');
}

// Ejemplo de uso
console.log(capitalizarPalabras("esta é unha FRASE de EXEMPLO"));
// Salida: "Esta É Unha Frase De Exemplo"