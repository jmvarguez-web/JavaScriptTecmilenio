const juego = {
  opciones: { 0: "✂️", 1: "🧻", 2: "🪨" },
  nombreJugadores: { jugador1: "Juan", jugador2: "CPU" },
  scores: { puntosJ1: 0, puntosJ2: 0 },
};

const pedirNuevoNombre = () => {
  const nombre = prompt("Introduce tu nombre:");
  cambiarNombre(nombre);
};

function cambiarNombre(nombreUsuario) {
  const expresionRegular = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(
    nombreUsuario
  );

  if (expresionRegular === true) {
    juego.nombreJugadores.jugador1 = nombreUsuario;
    console.log("Bienvenid@ " + nombreUsuario + " !");
  } else {
    nombreUsuario = juego.nombreJugadores.jugador1;
    console.log("Mejor te llamaré... 	" + nombreUsuario + " !");
  }

  //console.log(nombreUsuario + " expresion " + expresionRegular);
  //alert(nombreUsuario + " expresion " + expresionRegular);
}

function generarNumeroAleatorio() {
  var aleatorio = Math.round(Math.random() * 2);
  return aleatorio;
}

function imprimirManoAleatoria() {
  let opcion = generarNumeroAleatorio();
  return juego.opciones[opcion];
}

const imprimirResultado = () => {
  const jugador1 = juego.nombreJugadores.jugador1;
  const jugador2 = juego.nombreJugadores.jugador2;
  const puntosJ1 = juego.scores.puntosJ1;
  const puntosJ2 = juego.scores.puntosJ2;

  if (puntosJ2 > puntosJ1) {
    console.log("Fin del juego, gana " + jugador2 + ". Game Over.");
  } else if (puntosJ1 > puntosJ2) {
    console.log("Fin del juego, gana " + jugador1 + ".");
  }
};

const obtenerGanador = (resultado) => {
  const jugador1 = juego.nombreJugadores.jugador1;
  const jugador2 = juego.nombreJugadores.jugador2;
  const puntosJ1 = juego.scores.puntosJ1;
  const puntosJ2 = juego.scores.puntosJ2;

  if (resultado === 0) {
    return (
      " " +
      jugador1 +
      ": [" +
      puntosJ1 +
      "] " +
      jugador2 +
      ": [" +
      puntosJ2 +
      "] "
    );
  } else if (resultado === 1) {
    return (
      " " +
      jugador1 +
      ": [" +
      puntosJ1 +
      "] " +
      jugador2 +
      ": [" +
      puntosJ2 +
      "]"
    );
  } else {
    return (
      jugador1 + ": [" + puntosJ1 + "] " + jugador2 + ": [" + puntosJ2 + "] "
    );
  }
};

const evalua = (jagador1, jugador2) => {
  let gana = 0;

  if (jagador1 === jugador2) {
    console.log(jagador1 + " VS " + jugador2 + " empatan.");
  } else if (
    (jagador1 === "✂️" && jugador2 === "🧻") ||
    (jagador1 === "🧻" && jugador2 === "🪨") ||
    (jagador1 === "🪨" && jugador2 === "✂️")
  ) {
    console.log(jagador1 + " gana a " + jugador2 + ".");
    juego.scores.puntosJ1++;
    gana = 1;
  } else {
    console.log(jugador2 + " gana a " + jagador1 + ".");
    juego.scores.puntosJ2++;
    gana = 2;
  }

  imprimirResultado();
  const resultadoJuego = obtenerGanador(gana);
  console.log(resultadoJuego);
};

const main = () => {
  while (true) {
    let aleatoriodatahola01 = generarNumeroAleatorio(0, 2);
    let aleatoriodatahola02 = generarNumeroAleatorio(0, 2);
    const jugador1Hand = imprimirManoAleatoria(aleatoriodatahola01);
    const jugador2Hand = imprimirManoAleatoria(aleatoriodatahola02);

    console.log(juego.nombreJugadores.jugador1 + " eligió: " + jugador1Hand);
    console.log(juego.nombreJugadores.jugador2 + " eligió: " + jugador2Hand);

    evalua(jugador1Hand, jugador2Hand);

    if (juego.scores.puntosJ1 === 3 || juego.scores.puntosJ2 === 3) {
      imprimirResultado();
      break;
    }
  }
};

pedirNuevoNombre();
console.log("¡Que comience el juego!");
main();
