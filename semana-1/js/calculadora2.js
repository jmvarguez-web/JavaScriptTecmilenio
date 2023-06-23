// 1 Crea un nuevo archivo que se llame calculadora.js.
// 2. Realiza las modificaciones en el archivo html para que reconozca este nuevo archivo.
// 3. Solicita al usuario dos números a través del prompt.

//globales
try {
  var resultado;
  var resultadoCMD;
  while (true) {
    let numero1 = parseInt(prompt("Introduce el primer número", 0));
    console.log(numero1);
    let numero2 = parseInt(prompt("Introduce el segundo número", 0));
    console.log(numero2);
    // 4. Valida que los números sean mayores o iguales a 0 y que sean valores numéricos. En caso contrario, con un ciclo, vuelve a pedir los datos hasta
    //  que sean numéricos y mayores o iguales a 0.
    if (numero1 >= 0 && numero2 >= 0 && !isNaN(numero1) && !isNaN(numero2)) {
      // 5. Crea una variable que se llame resultado en la que vas a imprimir la siguiente cadena compuesta:
      // "La suma es: ” +(numero1+numero2)+ “ <br/>”+
      // “La resta es: ” +(numero1-numero2)+ “ <br/>”+
      // “La multiplicación es: ” +(numero1*numero2)+ “ <br/>”+
      // “La división es: “ +(numero1/numero2)+ “ <br/>”;
      resultado =
        "La suma es: " +
        (numero1 + numero2) +
        " <br/>" +
        "La resta es: " +
        (numero1 - numero2) +
        " <br/>" +
        "La multiplicación es: " +
        numero1 * numero2 +
        " <br/>" +
        "La división es: " +
        numero1 / numero2 +
        " <br/>";
      // 6. Crea una variable llamada resultadoCMD en la que vas a asignar la siguiente cadena compuesta:
      // “La suma es: ” +(numero1+numero2)+ “ \n” +
      // “La resta es: ” +(numero1-numero2)+ “ \n” +
      // “La multiplicación es: ” +(numero1*numero2)+ “ \n” +
      // “La división es: ” +(numero1+numero2)+ “ \n” ;
      resultadoCMD =
        "La suma es: " +
        (numero1 + numero2) +
        "\n" +
        "La resta es: " +
        (numero1 - numero2) +
        "\n" +
        "La multiplicación es: " +
        numero1 * numero2 +
        "\n" +
        "La división es: " +
        numero1 / numero2 +
        "\n";

      // 7. Imprime en el documento el contenido de la variable resultado.
      document.getElementById("resultado").innerHTML = resultado;
      // document.getElementById("esultado").Write("asas");
      // 8. Imprime en una alerta el contenido de la variable resultadoCMD.
      alert(resultadoCMD);
      // 9. Imprime en la consola el contenido de la variable resultadoCMD.
      console.log(resultadoCMD);

      break;
    } else {
      alert("Introduce un valor valido");
      continue;
    }
  }
} catch (error) {}
