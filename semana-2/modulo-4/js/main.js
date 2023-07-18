// Ahora, en el archivo js, realiza lo siguiente:
// 1. Crea el objeto juego, el cual tendrá en su interior tres arreglos:
// a. opciones: {0: " ",1: " ",2: " "}
// b. nombreJugadores: {jugador1: "jugador1", jugador2: "Computadora"}
// c. scores: {puntosJ1: 0, puntosJ2: 0}
// 2. Crea una función flecha para solicitar el nombre del usuario, a través de una ventana de mensaje del navegador, y asígnala a la variable
//  pedirNuevoNombre.
// 3. Crea una función expresada que permita asignar el nombre proporcionado por el usuario al , nómbrala cambiarNombre. Esta función
//  recibirá como parámetro el nuevo nombre proporcionado por el usuario y tendrá que realizar lo siguiente:
// a. Validar, a través de expresiones regulares, que el nombre contenga letras y números. En caso de que solo contenga números o caracteres
// especiales, deberá asignar el nombre por defecto declarado en el objeto.
// b. En cada caso imprime un mensaje de bienvenida:
// i. En caso de que el nombre cumpla con las condiciones, imprime:
// "Bienvenid@ " + nombre del jugador + " !"
// ii. En caso de que el nombre no sea aceptado, imprime:
// "Mejor te llamaré... " + nombre por defecto declarado en el objeto.
// 4. Crea una función que genere un número aleatorio:
// a. El valor de este aleatorio deberá estar entre 0 y 2, puedes realizarlo utilizando el método random de la función Math, redondéalo al entero
// menor utilizando el método floor de la función Math.
// b. Asígnalo a la variable aleatorio.
// c. Regresa el valor de esa variable convertido en cadena.
// 5. Crea una función expresada llamada imprimirManoAleatoria, la cual deberá tomar el número de la variable aleatorio y, con base en las opciones del
//  objeto juego, regresará el ícono piedra, papel o tijera, respectivamente, obtenido desde el objeto.

const juego = {
  opciones: { 0: "tijera", 1: "papel", 2: "piedra" },
  nombreJugadores: { jugador1: "jugador1", jugador2: "Computadora" },
  scores: { puntosJ1: 0, puntosJ2: 0 },
};

console.log(juego.opciones);

const pedirNuevoNombre = () => {
  let nombre = prompt("Por favor, ingresa tu nombre:");

  cambiarNombre(nombre);
};

// stablecido. La expresión regular /(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+/ tiene las siguientes características:
//
// (?=.*[a-zA-Z]): Utiliza una lookahead assertion para asegurarse de que el nombre contenga al menos una letra.
// (?=.*\d): Utiliza otra lookahead assertion para asegurarse de que el nombre contenga al menos un número.
// [a-zA-Z\d]+: Coincide con una o más letras o números consecutivos en el nombre.
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

function aleatorio(inferior, superior) {
  var numPosibilidades = superior - inferior;
  var aleatorio = Math.random() * (numPosibilidades + 1);
  aleatorio = Math.floor(aleatorio);
  return inferior + aleatorio;
}

function imprimirManoAleatoria(aleatorio) {
  switch (aleatorio) {
    case 0:
      return String(juego.opciones[aleatorio]);
      break;

    case 1:
      return String(juego.opciones[aleatorio]);
      break;
    case 2:
      return String(juego.opciones[aleatorio]);
      break;

    default:
      break;
  }
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

const evalua = (Jugador1, Jagador2) => {
  let gana = 0;

  if (Jugador1 === Jagador2) {
    console.log(Jugador1 + " VS " + Jagador2 + " empatan.");
  } else if (
    (Jugador1 === "tijeras" && Jagador2 === "papel") ||
    (Jugador1 === "papel" && Jagador2 === "piedra") ||
    (Jugador1 === "piedra" && Jagador2 === "tijeras")
  ) {
    console.log(Jugador1 + " gana a " + Jagador2 + ".");
    juego.scores.puntosJ1++;
    gana = 1;
  } else {
    console.log(Jagador2 + " gana a " + Jugador1 + ".");
    juego.scores.puntosJ2++;
    gana = 2;
  }

  imprimirResultado();
  const resultadoJuego = obtenerGanador(gana);
  console.log(resultadoJuego);
};

const main = () => {
  while (true) {
    let aleatoriodatahola01 = aleatorio(0, 2);
    let aleatoriodatahola02 = aleatorio(0, 2);
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

// Ejemplo de uso de la función principal
pedirNuevoNombre();

console.log("¡Que comience el juego!");

main();

// let aleatoriodatahola01 = aleatorio(0, 2);
// let result = imprimirManoAleatoria(aleatoriodatahola01);
// console.log(result);
