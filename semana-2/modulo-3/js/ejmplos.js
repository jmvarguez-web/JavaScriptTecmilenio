function NOMBRE(parametro1){
    
    return parametro1;
}

const cuadrado = function (valor){
    return valor * valor;
}

console.log(cuadrado(10));
console.log(cuadrado(20));
console.log(cuadrado(2));


let matematicas = {
    x : 1,
    y : 2,
    suma : function(x,y){
        return x+y;
    }
}

console.log(matematicas.suma(2,3))

Juan Miguel Castaños  a  Todos 8:25 PM
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

Juan Miguel Castaños  a  Todos 8:42 PM
//punto crear la funcion
function contarCaracteres(cadena){
    //punto 3
    if(cadena === undefined){
        console.warn("No ingresaste ninguna cadena");
    }

    //punto 2??? cadena === ""
    if(cadena.length === 0){
        cadena = "(cadena vacia)";
    }

    //La cadena ${cadena} tiene ${numero} caracteres
    let numero = cadena.length;
    console.log(`La cadena ${cadena} tiene ${numero} caracteres`);


}


contarCaracteres();
contarCaracteres("");
contarCaracteres("Juan Miguel");

Juan Miguel Castaños  a  Todos 8:50 PM
//////
const contarCaracteres = (cadena) => {

Juan Miguel Castaños  a  Todos 9:05 PM
/////////////////
function sumame(a,b,funSYM, funSPD){
    let suma = a+b;
    //console.log(suma);

    funSYM(suma);
    funSPD(suma*2);


}

const sumaPorDos = function(resultado){
    console.log("La suma por dos es: " + resultado);
}

sumame(
    2,
    3,
    function(resultado){
        console.log("El valor de la suma es " + resultado);
    },
    sumaPorDos
)