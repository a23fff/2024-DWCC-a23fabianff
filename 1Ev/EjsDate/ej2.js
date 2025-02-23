function obtenerDiasMes(mes, anio) {
    return new Date(anio, mes, 0).getDate();
}
console.log(obtenerDiasMes(2, 2024));

