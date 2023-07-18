//ruidoQueHaceElAnimal es un parametro
const hacerRuido = function (ruidoQueHaceElAnimal) {
  console.log(this.tipo + " dice: " + ruidoQueHaceElAnimal);
};

let gato = { tipo: "felino", hacerRuido };
let perro = { tipo: "canino", hacerRuido };
let humano = { tipo: "humano", hacerRuido };

gato.hacerRuido("miauuuuu");
perro.hacerRuido("wao wuff");
humano.hacerRuido("wwwwaaaaaaa");

let objeto = {
  clave: 12.300034,
  nombre: "juan",
  edad: 40,
  hacerRuido: function () {
    console.log("wwaaaaaaa");
  },
};

let arreglo = [perro, gato, objeto, 8, 90];
console.log(arreglo[2]);

function NOMBRE_QUE_TU_QUIERAS(parame1, parametro2) {
  return ""; //opcional
}

const x = function (parame1, parametro2) {
  return ""; //opcional
};

const x2 = (parame1) => "hola" + parame1;
x2("xxxxx");



//ruidoQueHaceElAnimal es un parametro
const hacerRuido =  function (ruidoQueHaceElAnimal)  {
    console.log(this.tipo + " dice: " + ruidoQueHaceElAnimal)
}

let gato = { tipo:"felino", hacerRuido }
let perro = { tipo: "canino", hacerRuido}
let humano= {tipo: "humano", hacerRuido}

gato.hacerRuido("miauuuuu")
perro.hacerRuido("wao wuff")
humano.hacerRuido("wwwwaaaaaaa")

let objeto = {
    clave : 12.300034,
    nombre : "juan",
    edad: 40,
    hacerRuido: function(){
        console.log("wwaaaaaaa")
    }
}

let arreglo = [perro,gato,objeto,8,90]
console.log(arreglo[2])

function NOMBRE_QUE_TU_QUIERAS(parame1,parametro2){
    
    return ""; //opcional
}

const x = function (parame1,parametro2){
    
    return ""; //opcional
}

const x2 =  parame1 => "hola" + parame1
x2("xxxxx")

Juan Miguel Castaños  a  Todos 8:48 PM
****************************
class Persona{
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }
    
    //getter
    get nombre(){
        return this._nombre + "xx";
    }
    
    //setter
    set nombre(nuevoNombre){
        if(typeof nuevoNombre !== "string"){
            console.error("Nombre debe ser cadena")
        }else{
            this._nombre = nuevoNombre;
        }
    }
    get edad() {}
    set edad(nuevaEdad){}
}

const profesor = new Persona("Juan", 40)
//console.log(profesor);
const andres = new Persona("Andres", 25)
//console.log(andres)
profesor.nombre = "Miguel"
profesor.nombre
https://firebasestorage.googleapis.com/v0/b/lernit-v2.appspot.com/o/assets%2Ffiles%2F1668811852522.pdf?alt=media&token=942496a8-f3d3-4e83-bebf-f050156cdf6e#view=FitH

Juan Miguel Castaños  a  Todos 9:19 PM
-*****************************
class Libro{ 
    propiedades = {} ;
    constructor(precio, titulo, autor){
        this.propiedades._precio = precio;
        this.propiedades._titulo = titulo;
        this.propiedades._autor = autor;
        //_private.set(this, {propiedades: this.propiedades})
    }
    get titulo(){
        return this.propiedades._titulo;
    }
    get autor(){
        return this.propiedades._autor;
    }
    get precio(){
        return this.propiedades._precio;
    }
    set titulo(nuevoTitulo){
        if(typeof nuevoTitulo!=="string"){
            console.error("Invalid data")
            return;
        }

        this.propiedades._titulo = nuevoTitulo;
    }
    obtenerTodosLosDatos(){
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Precio:${this.precio} `)
    }
}

Juan Miguel Castaños 9:39 PM
class Comic extends Libro{
    ilustradores = [];
    constructor(precio,titulo,autor, ilustradores){
        super(precio,titulo,autor);
        this.ilustradores = ilustradores;
    } 
    agregarIlustrador(ilustradores){
        this.ilustradores.push(...ilustradores);
    }
    obtenerTodosLosDatos(){
        super.obtenerTodosLosDatos();
        console.log("Ilustradores", this.ilustradores)
    }
}