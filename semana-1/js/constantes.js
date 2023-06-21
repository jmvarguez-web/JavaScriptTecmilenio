// 1. Crea un nuevo archivo de JavaScript que se llame constantes.
// 2. Realiza las modificaciones en el archivo HTML.
// 3. Crea una variable web y colócale el valor “https://www.google.com”.
// 4. Crea una constante que se llame ip y asígnale el valor “192.168.1.100”.
// 5. Muestra en pantalla el resultado de estas modificaciones.
// 6. Cambia el valor de la variable web y colócale “https://www.facebook.com”
// 7. Cambia ahora el valor de la constante ip y asígnale el valor “10.10.1.100”.
// 8. Muestra en la consola del navegador el resultado de las modificaciones y explica el comportamiento resultante

let web = "https://www.google.com";
const ip = "192.168.1.100";

console.log("variable web: " + web);
console.log("constante ip: " + ip);
web = "https://www.facebook.com";

console.log("variable web cambio: " + web);

ip = "10.10.1.100";
alert(ip);
console.log("constante ip: " + ip);
