try {
  // Paso 3: Crear variables de suma y contador
  var suma = 0;
  var contador = 0;

  // Paso 4: Bucle while
  while (true) {
    // Paso 5: Solicitar al usuario que introduzca números
    var numero = prompt("Introduce números hasta que uno sea negativo");

    // Paso 6: Validar si el dato introducido es numérico
    if (isNaN(numero)) {
      numero = 0;
    } else {
      numero = parseFloat(numero); // Convertir a número
    }
    console.log(numero);
    // Paso 7: Sumar números mayores o iguales a 0
    if (numero >= 0) {
      suma += numero;
      contador++;
    } else {
      break; // Salir del bucle si se introduce un número negativo
    }
  }

  // Paso 8: Imprimir valores en consola
  console.log("Valor de la suma:", suma);
  console.log("Valor del contador:", contador);

  // Paso 9: Mostrar alerta con la suma y la media
  var media = suma / contador;
  alert(
    "La suma de todos los números es: " +
      suma +
      "\nLa media de todos los números es: " +
      media
  );
} catch (error) {}
