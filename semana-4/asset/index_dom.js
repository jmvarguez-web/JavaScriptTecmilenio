// 1. En el archivo js del menú hamburguesa, exporta por default una función que se llame hambugerMenu, la cual va a recibir como parámetros el
// botón que activa (llamémosle panelBtn) y el panel (que es el elemento que se va a mover).

// 2. Como se va a utilizar la delegación de eventos del DOM, y para poder trabajar más fácilmente, declara una constante y asígnale la clase
// document.

// 3. Asigna, mediante la delegación de eventos, el evento click al document. Indícale que, si el evento que lo origina coincide con el selector que se
// está enviando en panelBtn, intercambia la clase is-active al elemento panel, puedes hacerlo con la instrucción

export default function hambugerMenu(panelBtn, Panel, menuLink) {
  const d = document;

  d.addEventListener("click", (event) => {
    const target = event.target;
    // utilizamos target === panelBtn para comprobar si el objeto que originó el evento es el botón exactamente y target.closest(panelBtn) para comprobar si el objeto que originó el evento es cualquier elemento hijo del botón.
    var matcheslinks = document.querySelectorAll(".menu > a");

    const isButton = target.closest(Panel);
    if (isButton) {
      d.querySelector(Panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }

    if (target.matches(panelBtn)) {
      d.querySelector(Panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
  });
}

// 4. Para poder probar el funcionamiento, es necesario importar en el archivo que controla el funcionamiento del DOM (index_dom.js) la función
//  hamburgerMenu de “ruta_del_archivo/nombre_archivo.js”.
// 5. Crea una constante y asígnale la clase document.
// 6. Indícale a JavaScript que la carga del documento, con addEventListener, habilite la función hamburgerMenu.
// 7. Pásale como parámetros a hamburgerMenu el nombre del selector del botón que activa el menú (en este caso “.panel-btn”) y el elemento que
//  se va a mover (selector “·panel”).
// 8. Ejecuta tu código y ahora podrás visualizar esto cuando aprietas en el menú de hamburguesa:
