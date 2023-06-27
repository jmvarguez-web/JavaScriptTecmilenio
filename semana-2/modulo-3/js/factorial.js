// Duración: 75 minutos.
// Utilizando el código desarrollado HTML y la carpeta del ejercicio anterior, realiza las siguientes actividades:
// Ejercicio 3
// Crea un programa que calcule el factorial de un número (El factorial de un número entero positivo n se define como el producto de todos los números
// enteros positivos desde 1 hasta n), por ejemplo, factorial(5) devolverá 120 (=1*2*3*4*5).
// 1. Crea un nuevo archivo js y nómbralo factorial.js.
// 2. Apunta el html para que tome la funcionalidad del nuevo archivo js.
// 3. En el archivo js, crea una función expresada llamada factorial que haga las siguientes validaciones:
// a. Pedir al usuario que ingrese un número y evalúa si se ingresó con undefined, en caso de que sí, imprime un warning en la consola que le
// indique al usuario “No ingresaste un número”.
// b. Valida que el valor que se está ingresando es un número, en caso de que no lo sea, imprime un error en la consola que diga ‘el valor de
// “$(variable)” ingresado NO es un número’.
// c. Valida que, si el número ingresado es igual a 0, se envíe a la consola un error que diga “El número no puede ser 0”.
// d. Valida el número con Math.sign, en caso de ser negativo, imprime un error en la consola que diga “El número no puede ser negativo”.
// e. Declara una variable factorial con valor igual a 1.
// f. Crea un ciclo en donde tomes el valor del número ingresado por el usuario y se lo asignes a la variable que controla el ciclo, en cada iteración
// le debes restar 1 y harás esto mientras que la variable que controla el ciclo sea mayor que uno.
// g. Dentro del ciclo, multiplica la variable factorial por la variable que controla el ciclo y asigna ese nuevo valor a la misma variable factorial.
// h. Cuando termine el ciclo, informa a la consola la siguiente cadena `El factorial del número ${variable) es $(factorial)

// Duración: 75 minutos.
// Utilizando el código desarrollado HTML y la carpeta del ejercicio anterior, realiza las siguientes actividades:
// Ejercicio 3
// Crea un programa que calcule el factorial de un número (El factorial de un número entero positivo n se define como el producto de todos los números
// enteros positivos desde 1 hasta n), por ejemplo, factorial(5) devolverá 120 (=1*2*3*4*5).
// 1. Crea un nuevo archivo js y nómbralo factorial.js.
// 2. Apunta el html para que tome la funcionalidad del nuevo archivo js.
// 3. En el archivo js, crea una función expresada llamada factorial que haga las siguientes validaciones:
// a. Pedir al usuario que ingrese un número y evalúa si se ingresó con undefined, en caso de que sí, imprime un warning en la consola que le
// indique al usuario “No ingresaste un número”.
// b. Valida que el valor que se está ingresando es un número, en caso de que no lo sea, imprime un error en la consola que diga ‘el valor de
// “$(variable)” ingresado NO es un número’.
// c. Valida que, si el número ingresado es igual a 0, se envíe a la consola un error que diga “El número no puede ser 0”.
// d. Valida el número con Math.sign, en caso de ser negativo, imprime un error en la consola que diga “El número no puede ser negativo”.
// e. Declara una variable factorial con valor igual a 1.
// f. Crea un ciclo en donde tomes el valor del número ingresado por el usuario y se lo asignes a la variable que controla el ciclo, en cada iteración
// le debes restar 1 y harás esto mientras que la variable que controla el ciclo sea mayor que uno.
// g. Dentro del ciclo, multiplica la variable factorial por la variable que controla el ciclo y asigna ese nuevo valor a la misma variable factorial.
// h. Cuando termine el ciclo, informa a la consola la siguiente cadena `El factorial del número ${variable) es $(factorial)

function factorial(numero) {
  if (numero === undefined) {
    console.warn("No ingresaste un número");
  } else if (isNaN(numero) || typeof numero !== "number") {
    // si es true no es un numero
    console.error(`el valor de ${numero} ingresado NO es un número`);
  } else if (numero === 0) {
    console.error("El número no puede ser 0");
  } else if (Math.sign(numero) === -1) {
    console.log("El número no puede ser negativo");
  } else {
    let factorial = 1;
    console.log(typeof numero);
    for (let i = numero; i > 1; i--) {
      factorial *= i;
      console.log(factorial);
    }
    console.log(`El factorial del número ${numero} es ${factorial}`);
  }
}

// factorial(0);
//factorial("5");
// factorial(1,2,3);
// factorial(0);
// factorial(-5);
// factorial(5);
//factorial(8);
