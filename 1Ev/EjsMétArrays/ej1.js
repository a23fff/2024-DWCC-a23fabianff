const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

const suma = objects.reduce((total, obj) => total + obj.price, 0);
console.log(suma);