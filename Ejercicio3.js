// Cadena de texto - Ejercicio

let nombre = "Rafael";
let apellidos = "Toca los";
let estudiante = `${nombre} ${apellidos}`;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let contarCaracteres = estudiante.length;
console.log(contarCaracteres);

let primeraLetraDelNombre = estudiante[0];
console.log(primeraLetraDelNombre);

let longitud = nombre.length;
console.log(longitud)
let ultimaLetraDelNombre = estudiante[longitud-1];
console.log(ultimaLetraDelNombre);

// Otra variable que contenga la última letra del Apellido
longitud = apellidos.length;
console.log(longitud)
let ultimaLetraDelApellido = apellidos[longitud-1];
console.log(ultimaLetraDelApellido);

// Una cadena de texto que elimine los espacios de la variable "estudiante"
nombre = "  Rafael";
apellidos = "toca los    "
estudiante = `${nombre} ${apellidos}`;
console.log(estudiante)
console.log(estudiante.length)
let sinEspacios = estudiante.trim();
console.log(sinEspacios);
console.log(sinEspacios.trim().length)


// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let contenido = estudiante.includes(`${nombre}`);
console.log(contenido);

