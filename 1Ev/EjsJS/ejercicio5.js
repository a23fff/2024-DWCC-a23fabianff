// Inicializa unha variable cun número para calcular o factorial
let n = 5;
let factorial = 1;

// Calcular o factorial
for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(`O factorial de ${n} é: ${factorial}`);
