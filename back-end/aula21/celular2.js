function Celular(modelo, fabricante) {
    this.modelo = modelo;
    this.fabricante = fabricante;
};

const Celular_01 = new Celular("S10", "Samsung");
console.log(Celular_01.modelo, Celular_01.fabricante);
