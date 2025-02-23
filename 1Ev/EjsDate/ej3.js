function esFinDeSemana(fecha) {
    const dia = fecha.getDay();
    return dia === 0 || dia === 6;
}
console.log(esFinDeSemana(new Date(2024, 6, 27)));

