const calcularBuscaminas = (taboleiro) => {
    const filas = taboleiro.length;
    const columnas = taboleiro[0].length;
    const resultado = Array.from({ length: filas }, () => 
        Array(columnas).fill(0)
    );
    
    const direccions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1]
    ];
    
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (taboleiro[i][j] === -1) {
                resultado[i][j] = -1;
                continue;
            }
            
            let minas = 0;
            for (const [dx, dy] of direccions) {
                const novaFila = i + dx;
                const novaCol = j + dy;
                
                if (novaFila >= 0 && novaFila < filas && 
                    novaCol >= 0 && novaCol < columnas && 
                    taboleiro[novaFila][novaCol] === -1) {
                    minas++;
                }
            }
            resultado[i][j] = minas;
        }
    }
    return resultado;
};

const arrayEntrada = [
    [0, 0, -1, 0],
    [0, -1, -1, 0]
];
console.log(calcularBuscaminas(arrayEntrada));
// Debe devolver:
// [[1, 3, -1, 2],
//  [1, -1, -1, 2]]