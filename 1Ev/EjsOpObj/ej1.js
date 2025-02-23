const television = {
    marca: "Sony",
    categoria: "televisores",
    unidades: 4,
    prezo: 354.99,
    importe: function() {
      return this.unidades * this.prezo;
    }
  };

  console.log("Importe total:", television.importe());