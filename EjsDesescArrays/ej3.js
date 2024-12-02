const infoVuelos = "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio09433847 22;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30";

const vuelos = infoVuelos.split('+');

vuelos.forEach(vuelo => {
  const [tipo, desde, hacia, hora] = vuelo.split(';');
  const salida = `${tipo.startsWith('_Delayed') ? '🔴' : ''}${tipo.replaceAll('_', ' ')} ${desde.slice(0, 3).toUpperCase()} ${hacia.slice(0, 3).toUpperCase()} (${hora})`.padStart(45);
  console.log(salida);
});