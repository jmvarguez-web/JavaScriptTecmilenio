// 2. Crea cuatro variables en el archivo main.js para acceder a los inputs, una por cada input (descripcion, calorias, carbohidratos y proteina)
// 3. Crea una variable de tipo arreglo en la que se van a almacenar los elementos una vez que se cumplan con las validaciones.
// 4. En el archivo index.html, crea un evento onclick en el botón que agrega elementos a fin de poder validar si el usuario ingresó algún valor. Haz que
// el botón valide a través de la función validarInput().
//
// Variables para acceder a los inputs
const descripcion = $("#descripcion");
const calorias = $("#calorias");
const carbohidratos = $("#carbohidratos");
const proteina = $("#proteina");

// Variable para almacenar los elementos validados
const elementos = [];

descripcion.keypress(() => {
  descripcion.removeClass("is-invalid");
});
calorias.keypress(() => {
  calorias.removeClass("is-invalid");
});
carbohidratos.keypress(() => {
  carbohidratos.removeClass("is-invalid");
});
proteina.keypress(() => {
  proteina.removeClass("is-invalid");
});

// Función para validar los inputs
function validarInput() {
  descripcion.val()
    ? descripcion.removeClass("is-invalid")
    : descripcion.addClass("is-invalid");
  calorias.val()
    ? calorias.removeClass("is-invalid")
    : calorias.addClass("is-invalid");
  carbohidratos.val()
    ? carbohidratos.removeClass("is-invalid")
    : carbohidratos.addClass("is-invalid");
  proteina.val()
    ? proteina.removeClass("is-invalid")
    : proteina.addClass("is-invalid");
  console.log($(".card-footer").find(".is-invalid").length);
  if ($(".card-footer").find(".is-invalid").length === 0) {
    agregar();
  }
}
function renderElementos() {
  $("table tbody").empty();
  elementos.map(function (element) {
    $("table tbody").append(filaTabla(element));
    console.log(element);
  });
}
function limpiarInputs() {
  descripcion.val("");
  calorias.val("");
  carbohidratos.val("");
  proteina.val("");
}
function agregar() {
  let nuevoElemento = {
    descripcion: descripcion.val(),
    calorias: parseFloat(calorias.val()),
    carbohidratos: parseFloat(carbohidratos.val()),
    proteina: parseFloat(proteina.val()),
  };
  elementos.push(nuevoElemento);
  limpiarInputs();
  actualizarTotales();
  renderElementos();
}

// 1. Crea una función atrsToCadena:
// a. Debe recibir dos parámetros: el tag y otro objeto, que son las clases de este tag.
function atrsToCadena(tag, obj) {
  // b. Obtén las llaves del objeto que se está pasando, antes crea una variable y utiliza la función de JavaScript Objet.keys del objeto que se está
  // pasando.
  const keys = Object.keys(obj);
  // c. Crea otra variable atributos del tipo array.
  const atributos = [];
  // d. Crea un ciclo for con el que vas a recorrer el contenido de keys.
  // e. Guarda en una nueva variable atributo el atributo que va a ser igual a la llave de la posición y este se va a agregar al arreglo que se creó
  // mediante un push de la manera atributo = atributo del objeto.
  for (let value of keys) {
    atributos.push(value);
    console.log(value);
  }
  return atributos.join(tag);
  // f. Genera el string utilizando la función de JavaScript .join que regresa el contenido convertido en una cadena.
  // g. Regresa el string resultante.
}
// 2. Crea la función atrsTag que reciba un objeto y retorne la cadena completa para el html:
function atrsTag(obj, contenido) {
  // a. A esta función se le van a pasar dos parámetros: un objeto que contiene el tag y la clase con sus atributos. Además, se requiere pasarle el
  // contenido de ese tag.
  // obj={ tag, clase, ...atributos };

  // b. Debe validar si la parte en donde vienen la clase y sus atributos no está vacía, en caso de estarlo, solo regresará el tag sin clases que modifiquen
  // su apariencia o comportamiento
  if (!obj.tag && Object.keys(contenido).length === 0) {
    return `<${tag}>${contenido}</${tag}>`;
  }
  //. Por otro lado, en caso de que sí traiga atributos, mandará a llamar a la clase atrsToCadena y esta función
  // convertirá esos atributos en cadena que se pintará después del tag, luego el contenido y el tag de cerradura.
  const atributosString = atrsToCadena(obj.tag, contenido);
  // c. Debe retornar un string.
  return `<${tag} ${atributosString}>${contenido}</${tag}>`;
}

// 3. Crea una función expresada que armará los tags:
// a. Nombra a esta función tag.

function tag(obj, contenido) {
  if (typeof obj === "string") {
    return atrsTag({ tag: obj }, contenido);
  } else {
    return atrsTag(obj.tag, obj.contenido);
  }
}
// b. Esta función valida si el tipo de dato del objeto recibido es un string, si lo es, entonces manda a llamar a la función atrsTag (atributos de tag) y
// se le pasará como atributo la propiedad tag (tag:t). En caso contrario, solo pásale tag (t).

// 4. Crea una función a la que nombrarás celdaTabla, esta va a generar una sola celda y la forma de hacerlo es utilizando la función tag. Pásale como
//  argumento la cadena ’td'.

function celdaTabla() {
  return tag("td");
}

// 5. Como no se desea llamar a esa función cada vez que se va a hacer una celda, construye una función que lo haga por ti:
// a. Nómbrala celdasTabla, la cual recibirá un arreglo. Para obtener cada uno de los elementos de ese arreglo, utiliza la función map de JavaScript,
// ejecuta celdaTabla y unifica con la función .join().
function celdasTabla(arreglo) {
  let celdasvarios = elementos.map(function (element) {
    return `${element.descripcion} ${element.calorias}`;
  });
  console.log(celdasvarios.join(celdaTabla()));
}

// 6. Ahora, crea una función para armar una fila, nómbrala filaTablaTag y esta será igual a la invocación de la función tag con la cadena ’tr', que es el
//  tag que forma una fila en una tabla.
function filaTablaTag() {
  return tag("tr");
}

// 7. Crea una función que arme las filas con sus respectivas celdas, la cual deberá llamarse filaTabla y recibirá un arreglo de items. Es aquí donde
//  utilizarás la función compose, a la cual le pasarás como argumentos la función filaTablaTag y celdasTabla, pasando también los items aparte de la
//  siguiente manera:

const compose =
  (...functions) =>
  (data) =>
    functions.reduceRight((value, func) => func(value), data);

const filaTabla = (elementos) => compose(filaTablaTag, celdasTabla)(elementos);

const actualizarTotales = () => {
  let totalCalorias = 0;
  let totalCarbohidratos = 0;
  let totalProteina = 0;
  elementos.map((elemento) => {
    totalCalorias += elemento.calorias;
    totalCarbohidratos += elemento.carbohidratos;
    totalProteina += elemento.proteina;
  });

  $("#totalCalorias").text(totalCalorias);
  $("#totalCarbohidratos").text(totalCarbohidratos);
  $("#totalProteina").text(totalProteina);
};
