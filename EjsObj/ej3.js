//a
function calcularAreaCirculo(radio) {
    let area = Math.PI * Math.pow(radio, 2);
    return area.toFixed(2); 
}

console.log(calcularAreaCirculo(5));


//b
function calcularPerimetroCirculo(radio) {
    let perimetro = 2 * Math.PI * radio;
    return perimetro.toFixed(2); 
}

console.log(calcularPerimetroCirculo(5)); 
