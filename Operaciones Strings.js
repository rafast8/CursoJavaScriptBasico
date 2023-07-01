// Como obtener la longitud de un STRING
let str = "1234567890sfddfvs f sdfgvsdf sdfvgsa";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice() substring() substr()
let slice_str = str.slice(5, 20);
console.log(slice_str);

let substring_str = str.substring(5, 10)
console.log(substring_str)

let substr_str = str.substr(5, 10)
console.log(substr_str)

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola soy Pepillo";
console.log(cadena)
// Al utilizar strings sólo reemplaza la primera instancia
console.log(cadena.replace('Pepillo', 'Rafael'))


let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

// Al utilizar strings sólo reemplaza la primera instancia
console.log(texto_largo.replace('los', 'CINCO'))

// Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, 'CINCO'))