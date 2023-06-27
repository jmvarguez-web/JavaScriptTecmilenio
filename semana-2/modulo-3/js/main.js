// En el archivo js realiza lo siguiente:
// Programa una función que cuente el número de caracteres de una cadena de texto, por ejemplo, miFunción("Hola Mundo") devolverá: La cadena
// “Hola Mundo” tiene 10 caracteres.
// 1. Crea la función contar caracteres.
// 2. Como parámetro, asigna un valor por defecto (cadena vacía) para que, si no se pasa alguna cadena, le sea asignado este valor.
// 3. Utiliza una validación para que, si no se pasa ningún carácter, se ponga un menaje de warning en la consola indicando “No ingresaste ninguna
//  cadena”. En caso contrario, indicar con el texto: “La cadena ${cadena} tiene ${numero} caracteres”.
// 4. Manda a llamar la función con los siguientes parámetros:
// 5. La salida en la consola deberá tener la siguiente apariencia:
// 6. Convierte esta función en una función flecha asignándola a una constante, de manera que sea una función expresada y utilice el operador ternario.
// 7. Prueba nuevamente la función y debería tener el mismo resultado.

function contarCaracteres(cadena = "") {
  if (cadena === "") {
    console.warn("No ingresaste ninguna cadena");
  } else {
    console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
  }
}
contarCaracteres("Hola Mundo");

const contar = (cadena = "") => {
  if (cadena === "") {
    console.warn("No ingresaste ninguna cadena");
  } else {
    console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
  }
};
contar("Hola Mundo");

// Ejercicio 2
// Crea funciones anónimas:
// 1. Declara una función anónima en una variable llamada pelicula.
// 2. Haz que la función regrese la cadena “El nombre de la película es: " más el nombre de la película proporcionada por el usuario.
// 3. Invoca a la función desde la consola de esta manera: pelicula(“Avengers”).
// 4. Tu resultado tendría que ser similar al siguiente:
const pelicula = function (nombre) {
  console.log(`El nombre de la película es:${nombre}`);
};
pelicula("Avengers");
// Callback
// 1. Crea una función que se llame sumame, a la que le pases como argumento dos números enteros.
// 2. Crea una variable que se llame suma dentro de la función y que realice la suma de los dos argumentos.
// 3. Imprime en la consola el contenido de la variable suma.
// 4. Mándala llamar pasando dos parámetros. Para este ejemplo se utilizó sumame(2,4), esta tendría que ser la salida:

function sumame(a, b) {
  let suma = a + b;
  console.log(suma);
}

sumame(2, 4);

// 5. Conviértela en una función Callback, agregando dos Callback en los parámetros, por ejemplo, sumaYmuestra y sumaPorDos.
// 6. Usa la función callback sumaYmuestra y envíale el valor de suma.
// 7. Usa la función callback sumaPorDos y multiplica el resultado de la suma por 2.

// 8. Manda llamar a la función sumame con cuatro parámetros:
// a. En el primero ingresa un número entero.
// b. En el segundo argumento ingresa otro número entero.
// c. En el tercero ingresa un callback, que puede ser una función anónima que recibe como parámetro el resultado de suma y lo que hará es
// mandar a la consola la cadena 'La suma es', resultado.
// d. En el cuarto parámetro ingresa una función anónima que recibe como parámetro resultado y lo que hará es mandar a la consola 'La suma por
// dos es:', resultado.

function sumameDos(a, b, callback, callbackporDos) {
  let suma = a + b;
  callback(suma);
  callbackporDos(suma);
}

let sumaYmuestra = (resultado) => console.log("La suma es: " + resultado);

let sumaPorDos = (resultado) => console.log("La suma por dos es: " + resultado);

sumameDos(2, 4, sumaYmuestra, sumaPorDos);
