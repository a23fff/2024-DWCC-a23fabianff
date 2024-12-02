const desgloseCartos = (cantidade) => {
    const billetes = [500, 200, 100, 50, 20, 10, 5];
    const moedas = [2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
    const resultado = {};
    
    let restante = cantidade;
    
    billetes.forEach(billete => {
        const cantidad = Math.floor(restante / billete);
        if (cantidad > 0) {
            resultado[`${billete}€`] = cantidad;
            restante = (restante % billete).toFixed(2);
        }
    });
    
    moedas.forEach(moeda => {
        const cantidad = Math.floor(restante / moeda);
        if (cantidad > 0) {
            resultado[`${moeda}€`] = cantidad;
            restante = (restante % moeda).toFixed(2);
        }
    });
    
    return resultado;
};

console.log(desgloseCartos(500));
console.log(desgloseCartos(145.60));
console.log(desgloseCartos(10000000.618245127471));
