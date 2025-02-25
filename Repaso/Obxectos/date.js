// Mostrar día de semana do 25 de xullo
let data = new Date();

data.setDate(25);
data.setMonth(6); // Xullo 6 (porque xaneiro = 0)
data.setFullYear(new Date().getFullYear());

const diaSemana = data.getDay();

// Función que ao pasar un mes devolva o nº de días
function diasMes(mes, ano = new Date().getFullYear()) {
  return new Date(ano, mes + 1, 0).getDate();
}
//console.log(`Febreiro ten ${diasMes(1)} días`);

// Crea unha función á que se lle pase unha data e que devolva true se é finde
let fecha = new Date();
let day = fecha.getDate();
let month = fecha.getMonth();
let year = fecha.getFullYear();

function finde(day, month, year) {
  // Crear una nueva fecha con los valores pasados (OJO: meses van de 0 a 11)
  let fecha = new Date(year, month, day);

  // Obtener el día de la semana (0 = Domingo, 6 = Sábado)
  let diaS = fecha.getDay();

  // Verificar si es fin de semana (Sábado o Domingo)
  return diaS === 0 || diaS === 6;
}

// Crea unha función que reciba unha data como parámetro e devolva o número de días que pasaron dende que comezou o ano.
