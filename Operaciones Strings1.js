// Métodos de cadenas de texto (parte 2)
let input = "escorpio";
let signo = "ESCORPIO";

// toLowerCase()
console.log(input.toLowerCase())
console.log(input.toLowerCase() === signo.toLowerCase())

// toUpperCase()
console.log(input.toUpperCase())
console.log(input.toUpperCase() === signo.toUpperCase())

// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1}  ${str_2}`)
console.log(`${str_1} "RAFA" ${str_2}`)

// Eliminar Spaces al inicio y al final
let conEspacios = "    Hola soy un string con espacios al inicio y al final.   "
console.log(conEspacios.length)

// trim() elimina al inicio y al final
console.log(conEspacios.trim().length)

// trim() elimina al inicio 
// console.log(conEspacios.replace('Gorka', 'Miguel'))
console.log(conEspacios.trimStart())
console.log(conEspacios.trimStart().length)

// trim() elimina al final
console.log(conEspacios.trimEnd())
console.log(conEspacios.trimEnd().length)

// Obtener el caracter que hay en cierta posición
let cadena = "Hola soy el string número 4" // Es equibalente a = ["H", "o", "l", "a", " ", "s"........]

console.log(cadena.charAt(5))
console.log(cadena[5])

// Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Rafa y me gustan las motos. Mi nombre es Rafael y mi apellido es Villar"
console.log(str_5.indexOf("Rafa"))
console.log(str_5.indexOf("Rafas")) // Devuelve error o no encontrado
console.log(str_5.charAt(9))
console.log(str_5.charAt(10))
console.log(str_5.charAt(11))
console.log(str_5.charAt(12))
console.log(str_5.lastIndexOf("Rafa")) // Posicion de la última instancia
console.log(str_5.charAt(47))
console.log(str_5.charAt(48))
console.log(str_5.charAt(50))
console.log(str_5.charAt(51))
///.......
console.log(str_5.charAt(54))

console.log(str_5.lastIndexOf("Rafa"))



// Métodos de cadenas de texto (parte 3)
// https://regexr.com --> Para expresiones regulares
let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

// Obtener todas la instancias de una palabra
let numeroOcurrencias = texto_largo.match(/no/g);
console.log(texto_largo.match(/no/g))
console.log(numeroOcurrencias.length)

// ¿Existe la palabra dentro del texto?
console.log(texto_largo.includes("por"))

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito no es un mono"))
console.log(texto_largo.startsWith("Tito es un mono"))

// Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("árboles."))
console.log(texto_largo.endsWith("árboles"))