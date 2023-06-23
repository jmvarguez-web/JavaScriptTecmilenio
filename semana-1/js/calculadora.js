// 1 Crea un nuevo archivo que se llame calculadora.js.
// 2. Realiza las modificaciones en el archivo html para que reconozca este nuevo archivo.
// 3. Solicita al usuario dos números a través del prompt.
// 4. Valida que los números sean mayores o iguales a 0 y que sean valores numéricos. En caso contrario, con un ciclo, vuelve a pedir los datos hasta
//  que sean numéricos y mayores o iguales a 0.
// 5. Crea una variable que se llame resultado en la que vas a imprimir la siguiente cadena compuesta:
// “La suma es: ” +(numero1+numero2)+ “ <br/>”+
// “La resta es: ” +(numero1-numero2)+ “ <br/>”+
// “La multiplicación es: ” +(numero1*numero2)+ “ <br/>”+
// “La división es: “ +(numero1/numero2)+ “ <br/>”;
// 6. Crea una variable llamada resultadoCMD en la que vas a asignar la siguiente cadena compuesta:
// “La suma es: ” +(numero1+numero2)+ “ \n” +
// “La resta es: ” +(numero1-numero2)+ “ \n” +
// “La multiplicación es: ” +(numero1*numero2)+ “ \n” +
// “La división es: ” +(numero1+numero2)+ “ \n” ;
// 7. Imprime en el documento el contenido de la variable resultado.
// 8. Imprime en una alerta el contenido de la variable resultadoCMD.
// 9. Imprime en la consola el contenido de la variable resultadoCMD.

//globales
var numero1 = "";
var numero2 = "";
var operador = "";

function agregarNumero(numero) {
  document.getElementById("resultado").value = numero;

  if (operador === "") {
    numero1 = numero;
  } else {
    numero2 = numero;
  }
}

function agregarOperador(op) {
  document.getElementById("resultado").value = op;
  operador = op;
}

function calcular() {
  if (operador === "" || numero2 === "") {
    document.getElementById("resultado").value = "ERROR";
    return; ///break
  }

  if (operador === "+") {
    document.getElementById("resultado").value = numero1 + numero2;
  }
}

function limpiar() {
  operador = "";
  numero1 = "";
  numero2 = "";
  document.getElementById("resultado").value = "";
}
