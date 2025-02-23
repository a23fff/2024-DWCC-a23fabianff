const texto = "Hola mundo, JavaScript es asombroso.";

longitud = texto.length;
mayusculas = texto.toUpperCase;
function hola(texto) {
  if (texto.startsWith("Hola") && texto.endsWith(".")) {
    console.log("correcto");
  } else {
    console.log("incorrecto");
  }
}
const asteriscos = texto.replace(/[aeiou]/g, "*");
arraytexto = texto.split(" ");
arraytexto.forEach((element) => {
  console.log(element);
});
