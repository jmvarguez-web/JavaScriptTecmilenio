// 1. En el archivo index.html, modifica el contenido del link que apunta a la #seccion 2, asignándole la cadena Eventos del teclado.
// 2. En la sección con id seccion2:
// a. Modifica el contenido de la etiqueta h2 y colócale Eventos del teclado.
// 3. En la carpeta js, crea el archivo con el nombre teclado.js y haz lo siguiente:
// a. Asigna a la constante d la clase document.
// b. Exporta la función shortcuts que va a recibir el evento representado con la letra e.
// c. Imprime en la consola el tipo de evento recibido.
// d. Imprime en la consola también el evento recibido.
// 4. En el archivo index_dom.js, realiza:
// a. La importación de la función shortcuts desde el archivo “ruta_del_archivo/teclado.js”.
// b. Para desencadenar el evento, utiliza addEventListener y pásale como parámetros el tipo de evento del teclado que se está escuchando (“keydown”) y,
// como segundo parámetro, envíale una función flecha en la que invoques a la función shortcuts que recibe como parámetro al evento.
// 5. Para probar esta funcionalidad solo es necesario ejecutar la página, hacer clic en cualquier parte de esta y posteriormente oprimir cualquier tecla. En la
// consola debe informarse un objeto del tipo KeyboardEvent con la información del evento.
// 6. Desencadena otras propiedades en la funcion shortcuts para que puedas analizar su comportamiento (key, keyCode, ctrlKey, altKey, shiftKey).
// 7. También puedes probar con otros eventos como keyup o keypress.
// 8. Una vez que hayas comprobado la funcionalidad de los eventos y los comportamientos, crea una secuencia shortcut para que, si el usuario oprime esas
// teclas, se ejecute un alert:
// a. Valida si las teclas presionadas son la “a” y la tecla “alt”.
// b. En el cuerpo de la validación, crea una alerta con el texto “Has lanzado una alerta con el teclado”.
// 9. Crea otra validación para que valide con la tecla “c” y “alt” y crea un confirm con el texto “Has lanzado una confirmación con el teclado”.
// 10. Crea otra validación con la tecla “p” y “alt” y en el cuerpo de la validación crea un prompt con el texto “H

export default function shortcuts(e) {
  const d = document;

  console.log("Tipo de evento recibido:", e.type);
  console.log("Evento recibido:", e);
  console.log("Key:", e.key);
  console.log("Key:", e.keyCode);

  // Validar secuencia de teclas
  if (e.key === "a" && e.altKey) {
    alert("Has lanzado una alerta con el teclado");
  }

  if (e.key === "c" && e.altKey) {
    confirm("Has lanzado una confirmación con el teclado");
  }

  if (e.key === "p" && e.altKey) {
    prompt("Has lanzado un prompt con el teclado");
  }
}
