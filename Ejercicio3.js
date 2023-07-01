// Cadena de texto - Ejercicio

// Una cadena de texto con tu Nombre
let nombre = "Rafael";

// Una cadena de texto con tu Apellido
let apellidos = "Toca los";

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellidos}`;
console.log(estudiante);

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let contarCaracteres = estudiante.length;
console.log(contarCaracteres);

// - Una variable que contenga la primera letra del Nombre
let primeraLetraDelNombre = estudiante[0];
console.log(primeraLetraDelNombre);

// - Otra variable que contenga la última letra del Nombre
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

