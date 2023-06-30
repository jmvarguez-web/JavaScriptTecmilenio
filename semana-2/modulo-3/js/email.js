// Ejercicio 4
// Crea una función que valide que un texto sea un email válido. Regresará verdadero o falso según corresponda:
// 1. Crea un nuevo archivo js y nómbralo email.js.
// 2. Apunta el html para que tome la funcionalidad del nuevo archivo js.
// 3. En el archivo js, crea una función expresada llamada validarEmail que reciba como argumento email e inicialízalo como una cadena vacía.
// 4. Dentro de la función, valida lo siguiente:
//          a. Que se haya ingresado una cadena, en caso contrario, informa a la consola con un warning “No ingresaste un email”.
//          b. Valida que la cadena introducida sea del tipo string, en caso contrario, regresa un error en la consola con la cadena `el valor de “$(variable)”
//          ingresado NO es una cadena de texto’.
//          c. Declara una variable expReg e iguálala a una expresión regular:

let validarEmail = (email) => {
  if (!email) { //pueder ser indefinido o vcio
    console.warn("No ingresaste un email");
    return false;
  } else if (typeof email == "string") {
    console.log(typeof email);
    let expReg =
      /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9]+)*(\.[a-z]{2,15})/i.test(
        email
      );
    if (expReg === true) {
      console.log(`El correo: ${email} es valido`);
    } else {
      console.warn(`El correo: ${email} no es valido`);
    }
  } else {
    console.error(`el valor de "${email}" ingresado NO es una cadena de texto`);
  }
};

validarEmail();
validarEmail(34);
validarEmail("usuario.apellido@univeridad");
validarEmail("nombre_apellido@universidad.edu");
