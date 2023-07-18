export default function alarm(sound, btnPlay, btnStop) {
  const doc = document;
  var alarmTempo = null;
  const $alarm = doc.createElement("audio");

  $alarm.controls = "controls";
  $alarm.src = sound;
  $alarm.type = "audio/mp3";

  doc.getElementById("clock").appendChild($alarm);

  doc.addEventListener("click", (event) => {
    const targetev = event.target;
    if (targetev.matches(btnPlay)) {
      doc.querySelector(btnPlay).setAttribute("disabled", true);

      alarmTempo = setInterval(() => {
        $alarm.play();
      }, 2000);
    }

    if (targetev.matches(btnStop)) {
      doc.querySelector(btnPlay).removeAttribute("disabled");
      clearInterval(alarmTempo);

      // liberar nuestro inervalId de la variable
      alarmTempo = null;
      $alarm.pause();
      $alarm.currentTime = 0;

      //alert(btnStop);
    }
  });
}
