// a. Almacena en variables o peso e altura de dúas persoas
let peso1 = 70;   // en kg
let altura1 = 1.75; // en metros
let peso2 = 85;
let altura2 = 1.80;

// b. Calcular o IMC das dúas persoas
let imc1 = peso1 / (altura1 ** 2);
let imc2 = peso2 / (altura2 ** 2);

// c. Indicar cal ten o maior IMC
if (imc1 > imc2) {
    console.log(`O IMC (${imc1.toFixed(1)}) da primeira persoa é maior que o da segunda persoa (${imc2.toFixed(1)})!`);
} else if (imc2 > imc1) {
    console.log(`O IMC (${imc2.toFixed(1)}) da segunda persoa é maior que o da primeira persoa (${imc1.toFixed(1)})!`);
} else {
    console.log(`Ambas persoas teñen o mesmo IMC (${imc1.toFixed(1)})!`);
}
