// Generar un número aleatorio entre 0 y 3
const aleatorio03 = Math.floor(Math.random() * 4);

// Generar un número aleatorio entre 1 y 3
const aleatorio13 = Math.floor(Math.random() * 3) + 1;

// Número aleatorio entre valores dados
function numeroAleatorio(a, b) {
  const aleatorioab = Math.floor(Math.random() * (b - a + 1)) + a;
  console.log(aleatorioab);
}

// Minutos a horas e minutos
function mins(a) {
  horas = Math.floor(a / 60);
  minutos = a % 60;
  console.log(horas + " horas y " + minutos + " minutos.");
}

//
