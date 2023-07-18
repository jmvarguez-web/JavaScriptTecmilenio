// 2. Crea cuatro variables en el archivo main.js para acceder a los inputs, una por cada input (descripcion, calorias, carbohidratos y proteina)
// 3. Crea una variable de tipo arreglo en la que se van a almacenar los elementos una vez que se cumplan con las validaciones.
// 4. En el archivo index.html, crea un evento onclick en el botón que agrega elementos a fin de poder validar si el usuario ingresó algún valor. Haz que
// el botón valide a través de la función validarInput().
//
// Variables para acceder a los inputs
const descripcionInput = "#descripcion";
const caloriasInput = "#calorias";
const carbohidratosInput = "#carbohidratos";
const proteinaInput = "#proteina";

// Variable para almacenar los elementos validados
const elementos = [];
const nuevoElemento = [];

// Función para validar los inputs
function validarInput() {
  const descripcion = $(descripcionInput).val().trim();
  const calorias = parseFloat($(caloriasInput).val().trim());
  const carbohidratos = parseFloat($(carbohidratosInput).val().trim());
  const proteina = parseFloat($(proteinaInput).val().trim());
  console.log(isNaN(calorias));
  let valido = 0;

  // Validar que los campos no estén vacíos y los valores sean números válidos
  if (descripcion == "") {
    $(descripcionInput).addClass("is-invalid");
    valido = 1;
  }
  if (isNaN(calorias)) {
    $(caloriasInput).addClass("is-invalid");
    valido = 1;
  }
  if (isNaN(carbohidratos)) {
    $(carbohidratosInput).addClass("is-invalid");
    valido = 1;
  }

  if (isNaN(proteina)) {
    $(proteinaInput).addClass("is-invalid");
    valido = 1;
  }
  if (valido === 0) {
    const elemento = {
      descripcion,
      calorias,
      carbohidratos,
      proteina,
    };
    agregar(elemento);
  }
}

function agregar(elementovalido) {
  nuevoElemento.push(elementovalido);
  limpiarInputs();
}
function limpiarInputs() {
  $(descripcionInput).val("");
  $(descripcionInput).removeClass("is-invalid");
  $(caloriasInput).val("");
  $(caloriasInput).removeClass("is-invalid");
  $(carbohidratosInput).val("");
  $(carbohidratosInput).removeClass("is-invalid");
  $(proteinaInput).val("");
  $(proteinaInput).removeClass("is-invalid");
}

// const compose = (...functions) => data =>
//     functions.reduceRight((value, func) => func(value), data)

$("input").keypress(function () {
  if ($("#" + this.id).hasClass("is-invalid")) {
    $("#" + this.id).removeClass("is-invalid");
  }
});
