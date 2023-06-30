const player = {
  name: "Ryu",
  poder: 10,
  vida: 100,
  saySomething: function (mensaje) {
    //toda la logica
    console.log(mensaje);
  },
  recibirDanio: function (cantidad) {
    this.vida -= cantidad;
  },
  toString: function () {
    return `${this.name} tiene un poder de ${this.poder} y le queda ${this.vida} de vida`;
  },
};
let player2 = player;
player2.name = "Ken";
player2.name;
player.name;
