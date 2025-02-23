function diasTranscurridos(fecha) {
    let inicioAnio = new Date(fecha.getFullYear(), 0, 1);
    let diferencia = fecha - inicioAnio;
    return Math.floor(diferencia / (1000 * 60 * 60 * 24)) + 1;
}

console.log(diasTranscurridos(new Date(2024, 6, 20)));


