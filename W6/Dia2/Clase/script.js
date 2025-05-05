// Comentarios en JavaScript

// Este es un comentario de una sola línea

/************************
 * 
 * Este es un comentario de varias líneas
 *  
 */


// Variables en JavaScript

let mensaje; // Declaración de una variable
mensaje = "Hola Mundo"; // Asignación de un valor a la variable

let numero = 5; // Declaración y asignación de una variable en una sola línea

console.log(numero); // Imprime el valor de la variable mensaje en la consola


const PI = 3.14; // Declaración de una constante
// PI = 3.14159; // Esto generará un error porque no se puede reasignar una constante


var nombre = "Juan"; // Declaración de una variable con var (no recomendado en ES6)

// Tipos de datos en JavaScript
// 1. number
let edad = 25; // Número entero
let altura = 1.75; // Número decimal
let precio = 199_999_999; // Número muy grande

// 2. string
let saludo = "Hola, ¿cómo estás?"; // Cadena de texto
let letra = 'A'; // Cadena de un solo carácter
let cadenaNumero = "123"; // Cadena que representa un número
let cadenaCompleja = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`; // Plantilla de cadena (template string)
let contatenación = "Hola " + "mundo " + nombre; // Concatenación de cadenas

console.log(contatenación); // Imprime la cadena compleja en la consola

// 3. boolean
let esEstudiante = true; // Valor booleano (true o false)

// 4. null
let valorNulo = null; // Representa la ausencia de valor

// 5. undefined
let valorIndefinido; // Variable declarada pero no inicializada (undefined)


let patata; // Declaración de una variable sin inicializar
console.log('Patata: ', patata); // Imprime null en la consola
patata = "Soy una patata"; // Asignación de un valor a la variable
console.log('Patata: ', patata); // Imprime 5 en la consola

let estoEsUnNumero = 5; // Declaración de una variable con un número
console.log('Esto es un número: ', estoEsUnNumero); // Imprime 5 en la consola
estoEsUnNumero = "Soy una patata"; // Asignación de un valor a la variable
console.log('Esto es un número: ', estoEsUnNumero); // Imprime "Soy una patata" en la consola

// 6. object (Lo veremos más adelante)
let persona = { // Declaración de un objeto
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
    esEstudiante: true,
};

console.log(persona); // Imprime el objeto en la consola

let vector = [1, 2, 3, 4, 5]; // Declaración de un array (vector)
console.log(vector); // Imprime el array en la consola

console.log(vector[1]); // Imprime el primer elemento del array (1) en la consola

//----------------------

// Operadores en JavaScript
// 1. Aritméticos
let add = 5 + 3; // Suma
let num1 = 10, num2 = 5; // Declaración de dos variables
let resultSum = num1 + num2; // Suma de dos números

console.log("Suma: ", resultSum); // Imprime la suma en la consola

let resta = 10 - 5; // Resta
let multiplicacion = 5 * 3; // Multiplicación
let division = 10 / 2; // División

let modulo = 10 % 3; // Módulo (resto de la división)
let potencia = 2 ** 3; // Potencia (2 elevado a la 3)
let mathPow = Math.pow(2, 3); // Potencia usando Math.pow

console.log("Resto: ", modulo); // Imprime el resto de la división en la consola

// Funciones  (lo veremos más adelante)
// 1. Declaración de función
function suma(a, b) { // Declaración de una función
    return a + b; // Retorna la suma de a y b
}

console.log("Suma: ", suma(5, 3)); // Llama a la función y muestra el resultado en la consola

const sumaArrow = (a, b) => a + b; // Función flecha (arrow function)

console.log("Suma: ", sumaArrow(5, 3)); // Llama a la función flecha y muestra el resultado en la consola


// Función prompt
//let nombreUsuario = prompt("¿Cuál es tu nombre?"); // Solicita al usuario su nombre

//console.log("Hola " + nombreUsuario); // Imprime un saludo con el nombre del usuario en la consola

//let promtNumerA = parseInt(prompt("Introduce un número: ")); // Solicita al usuario un número
//let promtNumerB = parseInt(prompt("Introduce otro número: ")); // Solicita al usuario otro número

//console.log("Suma: ", promtNumerA + promtNumerB); // Imprime la suma de los dos números en la consola

let radius = parseFloat(prompt("Introduce el radio del círculo: ")); // Solicita al usuario el radio de un círculo
console.log("Área del círculo: ", Math.PI * radius ** 2); // Calcula y muestra el área del círculo en la consola

//alert("Hola " + nombre); // Muestra un mensaje de alerta con el nombre del usuario