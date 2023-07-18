import hamburgerMenu from "./index_dom.js";
import digitalClock from "./reloj.js";
import alarm from "./alarma.js";

import shortcuts from "./teclado.js";

const d = document;
// DOMContentLoaded
// El evento DOMContentLoaded ocurre en el objeto document.Debemos usar addEventListener para capturarlo:
d.addEventListener("DOMContentLoaded", () => {
  hamburgerMenu(".panel-btn", ".panel", "");
  digitalClock("#clock", "#activar-reloj", "#desactivar-reloj");
  alarm("./asset/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  document.addEventListener("keydown", (e) => {
    shortcuts(e);
  });
});
