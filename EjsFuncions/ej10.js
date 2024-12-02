const inicioXornada = "07:30";
const finalXornada = "17:45";

function axendarReunion(horaInicioReunion, duracionEnMinutos) {
  const [horasInicio, minutosInicio] = inicioXornada.split(":");
  const inicioXornadaMin = Number(horasInicio) * 60 + Number(minutosInicio);

  const [horasFin, minutosFin] = finalXornada.split(":");
  const finalXornadaMin = Number(horasFin) * 60 + Number(minutosFin);

  const [horasReunion, minutosReunion] = horaInicioReunion.split(":");
  const inicioReunionMin = Number(horasReunion) * 60 + Number(minutosReunion);

  const finReunionMin = inicioReunionMin + duracionEnMinutos;

  return (
    inicioReunionMin >= inicioXornadaMin && finReunionMin <= finalXornadaMin
  );
}

// Comprobacións
console.assert(
  axendarReunion("7:00", 15) == false,
  'Fallo comprobando axendarReunión("7:00", 15) == false'
);
console.assert(
  axendarReunion("7:15", 30) == false,
  'Fallo comprobando axendarReunión("7:15", 30) == false'
);
console.assert(
  axendarReunion("7:30", 30) == true,
  'Fallo comprobando axendarReunión("7:30", 30) == true'
);
console.assert(
  axendarReunion("11:30", 60) == true,
  'Fallo comprobando axendarReunion("11:30", 60) == true'
);
console.assert(
  axendarReunion("17:00", 45) == true,
  'Fallo comprobando axendarReunion("17:00", 45) == true'
);
console.assert(
  axendarReunion("17:30", 30) == false,
  'Fallo comprobando axendarReunion("17:30", 30) == false'
);
