function convertirMinutosAHoras(minutos) {
    let horas = Math.floor(minutos / 60);
    let minutosRestantes = minutos % 60;
    return `${horas} horas e ${minutosRestantes} minutos`;
}

console.log(convertirMinutosAHoras(130)); // Exemplo: 130 minutos (2 horas e 10 minutos).
