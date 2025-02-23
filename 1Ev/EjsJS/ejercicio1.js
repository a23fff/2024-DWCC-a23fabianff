// Variable que almacena un día da semana
let diaSemana = "martes";

// Verificar se o día é laborable ou non
if (["luns", "martes", "mércores", "xoves", "venres"].includes(diaSemana)) {
    console.log(`${diaSemana} é un día laborable.`);
} else {
    console.log(`${diaSemana} non é un día laborable.`);
}
