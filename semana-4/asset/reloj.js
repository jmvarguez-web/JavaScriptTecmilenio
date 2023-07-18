// 2. Crea el archivo reloj.js y realiza lo siguiente:
// a. Declara una constante y asígnale la clase document.

// b. Para crear el reloj, exporta la función para la creación de este:

// i. Nómbrala digitalClock.
// ii. Pásale como parámetros el reloj como tal (clock), el botón que lo inicia (btnPlay) y el botón que lo detiene (btnStop).
// iii. Declara la variable clockTempo en donde se guardará el reloj que se va a crear.
// iv. Utiliza la delegación de eventos y agrégale al document el evento click.
// v. Dentro de la delegación, detecta qué objeto originó el evento y valida:

export default function digitalClock(clock, btnPlay, btnStop) {
  const doc = document;
  var clockTempo = null;
  doc.addEventListener("click", (event) => {
    const targetev = event.target;
    if (targetev.matches(btnPlay)) {
      document.querySelector(btnPlay).setAttribute("disabled", true);

      clockTempo = setInterval(() => {
        const hourtime = new Date();
        doc.querySelector(
          clock
        ).innerHTML = `<h3>${hourtime.getHours()}:${hourtime.getMinutes()}:${hourtime.getSeconds()}</h3>`;
      }, 1000);
    }

    if (targetev.matches(btnStop)) {
      document.querySelector(btnPlay).removeAttribute("disabled");
      clearInterval(clockTempo);

      // liberar nuestro inervalId de la variable
      clockTempo = null;

      //alert(btnStop);
    }
  });
}

export function alarm(sound, btnPlay, btnStop) {
  const doc = document;
  var alarmTempo = null;
  const $alarm = document.createElementdocument.createElement("audio");
  $alarm.scr = sound;

  doc.addEventListener("click", (event) => {
    const targetev = event.target;
    if (targetev.matches(btnPlay)) {
      document.querySelector(btnPlay).setAttribute("disabled", true);

      alarmTempo = setInterval(() => {
        $alarm.play();
      }, 2000);
    }

    if (targetev.matches(btnStop)) {
      document.querySelector(btnPlay).removeAttribute("disabled");
      clearInterval(alarmTempo);

      // liberar nuestro inervalId de la variable
      alarmTempo = null;
      $alarm.pause();
      $alarm.currentTime = 0;

      //alert(btnStop);
    }
  });
}
