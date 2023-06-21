// 1. Crea un nuevo archivo js que se llame operadores-y-tipos.js
// 2. Crea las siguientes variables numero1=7, numero2=15.
// 3. Ahora, crea las variables: suma, resta, division, multiplicacion y realiza las operaciones aritméticas sobre las variables numero1 y numero2. Por
//  ejemplo, suma = numero1 + numero2.
// 4. Muestra en una alerta el resultado de las operaciones precedido por el texto “el resultado de la [operación] es: ”. La pantalla debe mostrar los
//  resultados así:

//  5. Declara las variables numero_entero=24, cadena_texto = “Hola ‘que’ tal”, verdadero_o_falso=true, numero_falso=”33”.
//  6. Ahora, suma la variable numero_entero y numero_falso. ¿Cuál es el resultado y por qué?
//  7. Convierte el contenido de la variable numero_falso en un entero. ¿Cuál fue el resultado y por qué?
//  8. Convierte la variable numero_entero a string y súmalo al número 9. ¿El resultado fue un número 33? ¿Por qué?
//  9. Ahora, imprime en la consola el tipo de dato de las variables c numero_entero,adena_texto, verdadero_o_falso, numero_falso. El resultado debe
//   ser algo así:
let numero1 = 7;
let numero2 = 15;
let suma;
let resta;
let division;
let multiplicacion;
let numero_entero = 24;
let cadena_texto = "Hola 'que' tal";
let verdadero_o_falso = true;
let numero_falso = "33";

suma = numero1 + numero2;
resta = numero1 - numero2;
division = numero1 / numero2;
multiplicacion = numero1 * numero2;

alert(
  "el resultado de la [operación] es: " +
    suma +
    "el resultado de la [operación] es: " +
    resta +
    "el resultado de la [operación] es: " +
    division +
    "el resultado de la [operación] es: " +
    multiplicacion
);

console.log(
  "sumar numero_entero y numero_falso:\n" + numero_entero + numero_falso
);

console.log(
  "Convierte el contenido de la variable numero_falso en un entero:\n" +
    parseInt(numero_entero)
);

console.log(
  " Convierte la variable numero_entero a string y súmalo al número 9.\n " +
    numero_entero.toString +
    9
);

alert(
  "numero_entero es de tipo: " +
    typeof numero_entero +
    "\ncadena_texto es de tipo: " +
    typeof cadena_texto +
    "\nverdadero_o_falso es de tipo: " +
    typeof verdadero_o_falso +
    "\nnumero_falso es de tipo: " +
    typeof numero_falso
);
