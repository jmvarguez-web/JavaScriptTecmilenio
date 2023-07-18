// Realiza lo siguiente en el archivo js:
// I. Creando los libros
// 1. Crea la clase Libro.
// 2. Crea el método constructor de la clase con las propiedades ().
// 3. Crea un objeto propiedades, las propiedades son titulo, autor y precio, y asígnales los valores de las propiedades pasadas como parámetros.
// Utiliza la convención de _ para indicar que esas propiedades son privadas, como se indica en el siguiente paso.
// 4. Convierte en privadas las propiedades. Para ello, necesitas crear un objeto llamado _private de la clase WeakMap(). Utiliza el método set y como
// argumentos de este método utiliza this y el objeto propiedades.
//  _private.set(this,{propiedades})
// 5. Para acceder a las propiedades, utiliza los métodos de acceso get y set, excepto para la propiedad precio. Para esta propiedad, por seguridad,
// solo crea el getter. Ejemplo:
//  6. Crea un método llamado obtenerTodosLosDatos que imprimirá en la consola todos los valores de la siguiente manera:
// // Obtiene el título de un libro:
// get titulo() {
//  return _privado.get(this).propiedades['_titulo'];
// }
// // Establece/modifica el título de un libro:
// set titulo(newTitulo) {
//  return _privado.get(this).propiedades['_titulo'] = newTitulo;
// }
// console.log( `Título: ${this.titulo}, Autor: ${this.autor}, Precio: ${this.precio}`);

class Libro {
  constructor(titulo, autor, precio) {
    const propiedades = { titulo, autor, precio };
    const _private = new WeakMap();
    _private.set(this, { propiedades });

    Object.defineProperties(this, {
      titulo: {
        get() {
          return _private.get(this).propiedades.titulo;
        },
        set(value) {
          _private.get(this).propiedades.titulo = value;
        },
      },
      autor: {
        get() {
          return _private.get(this).propiedades.autor;
        },
        set(value) {
          _private.get(this).propiedades.autor = value;
        },
      },
      precio: {
        get() {
          return _private.get(this).propiedades.precio;
        },
      },
    });
  }
  obtenerTodosLosDatos() {
    const { titulo, autor, precio } = this;
    console.log(`Título: ${titulo}`);
    console.log(`Autor: ${autor}`);
    console.log(`Precio: ${precio}`);
  }
}

// Ejemplo de uso

// II. Creando los comics
// 7. Crea una clase Comic que herede desde la clase Libro con extends.
// 8. Crea un constructor al que se le van a pasar las propiedades del padre y agrega la propiedad ilustradores.
// 9. Utiliza la función super para poder utilizar las propiedades titulo, autor y precio de la clase padre (Libro).
// 10. Define una nueva propiedad de tipo array, que se llamará ilustradores, para contener el nombre de los ilustradores de cada Comic y asígnale el
// valor pasado como argumento en el constructor.
class Comic extends Libro {
  constructor(titulo, autor, precio, ilustradores) {
    super(titulo, autor, precio);
    this.ilustradores = ilustradores;
  }
  // 11. Crea un nuevo método que se llame agregarIlustrador, el cual aceptará un arreglo como parámetro. Este método agregará ilustradores al
  // arreglo, utiliza el método push para eso.
  agregarIlustrador(ilustradores) {
    this.ilustradores.push(...ilustradores);
  }
  // 12. Sobrescribe el método obtenerTodosLosDatos. Para lograrlo, accede al método obtenerTodosLosDatos de la clase padre. Además, imprime en
  // consola los ilustradores con:
  obtenerTodosLosDatos() {
    super.obtenerTodosLosDatos();
    console.log("Ilustradores:", this.ilustradores.join(", "));
  }
}

// III. Creando un carrito de compras
// 13. Crea una nueva clase CarritoCompras, solo necesitarás un constructor y declarar un arreglo llamado productos, el cual se estará llenando
// posteriormente.
class CarritoCompras {
  constructor() {
    this.productos = [];
  }

  // 14. Crea un método llamado agregarProducto, el cual recibirá dos argumentos: la cantidad y el precio del producto. Crea un array dinámico para
  // que se cree utilizando los datos de entrada. Puedes utilizar la siguiente instrucción:
  //  this.productos.push(...Array(cantidad).fill(precio));

  agregarProducto(cantidad, precio) {
    this.productos.push(...Array(cantidad).fill(precio));
  }
  // 15. Crea un nuevo método llamado mostrarProductos para mostrar los productos ingresados al array, el cual lo único que hará es imprimir en
  // consola el contenido del arreglo productos.
  mostrarProductos() {
    console.log("Productos:", this.productos);
  }

  calcTotal() {
    return this.productos
      .map((precio) => precio)
      .reduce((ac, precio) => ac + precio, 0);
  }

  imprimirTicket() {
    console.log(`Total a pagar ${this.calcTotal()}`);
  }
}

const libro = new Libro("El gran libro", "John Doe", 200);
let Ilustradores = ["juan", "Mario", "Santos"];
const revistas = new Comic("El gran libro 2", "John Doe", 100, Ilustradores);

// 18. Crea un nuevo objeto llamado carrito, el cual será una instancia de la clase CarritoCompras.
const carrito = new CarritoCompras();
// 19. Utiliza el método agregarProducto y pásale como parámetros 2 y el precio del comic1.
carrito.agregarProducto(2, revistas.get.precio);
// 20. Utiliza el método agregarProducto y pásale como parámetros 3 y el precio del libro1.
carrito.agregarProducto(2, libro.get.precio);
// 21. Utiliza el método mostrarProductos para visualizar el contenido del carrito.
carrito.mostrarProductos();
console.log("*******************************************");
// 22. Utiliza el método imprimirTicket para visualizar el total del carrito de compras (en dinero).
carrito.imprimirTicket();
// 23. Utiliza el método obtenerTodosLosDatos de libro1 para mostrar los datos en la consola.

libro.obtenerTodosLosDatos();
console.log("*******************************************");
// 24. Utiliza el método obtenerTodosLosDatos de comic1 para mostrar los datos en la consola.

revistas.obtenerTodosLosDatos();
