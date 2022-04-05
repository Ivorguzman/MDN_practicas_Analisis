/* El objeto [JavaScript Math] :
Le permite realizar tareas matemáticas con números. */


/*  El método [Math.floor ()]:
 Redondea un número HACIA ABAJO al entero más cercano y devuelve el resultado. */


/* El método [querySelector ()] :
Devuelve el primer elemento que coincide con un selector o selectores CSS especificados en el documento.
Nota: El método querySelector () solo devuelve el primer elemento que coincide con los selectores especificados. */



/* La función [Number ()]:
Convierte el argumento del objeto en un número que representa el valor del objeto. Si el valor no se puede convertir a un número legal, se devuelve NaN.

Nota: Si el parámetro es un objeto Date, la función Number () devuelve el número de milisegundos desde la medianoche del 1 de enero de 1970 UTC. */




/* Definición y uso del atributo [.value]:
El atributo .value especifica el valor de un <input>elemento.
El atributo .value se usa de manera diferente para diferentes tipos de entrada:
Para "botón", "restablecer" y "enviar", define el texto del botón.
Para "texto", "contraseña" y "oculto": define el valor inicial (predeterminado) del campo de entrada
Para "casilla de verificación", "radio", "imagen": define el valor asociado con la entrada (este es también el valor que se envía al enviar).

Nota: el valueatributo no se puede utilizar con <input type="file">.*/


/* Definición y uso del atributo  [textContent]:
La propiedad textContent establece o devuelve el contenido de texto del nodo especificado y todos sus descendientes .
Si establece la propiedad textContent, los nodos secundarios se eliminan y se reemplazan por un único nodo Text que contiene la cadena especificada.

Nota: esta propiedad es similar a la propiedad innerText , sin embargo, existen algunas diferencias:
textContent devuelve el contenido de texto de todos los elementos, mientras que innerText devuelve el contenido de todos los elementos, excepto los elementos <script> y <style>.
innerText no devolverá el texto de los elementos que están ocultos con CSS (textContent lo hará).
Sugerencia: A veces, esta propiedad se puede usar en lugar de la propiedad nodeValue , pero recuerde que esta propiedad también devuelve el texto de todos los nodos secundarios.

Sugerencia: Para establecer o devolver el contenido HTML de un elemento, use la propiedad innerHTML . */





/* Vinculando un numero aleatorioi a una variable( Cadena de string unica) */
//let randomNumber =  Math.random()  
//let randomNumber = Math.random() * 100;
//let randomNumber = Math.floor( Math.random() * 100  )
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

/* Añadiendo vinculaciones (variables) para vicular (almacenar) nuestros datos  */

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");


let guessCount = 1;
let resetButton;

/* Creando las Funciones */
function checkGuess() {
    let userGuess = Number(guessField.value);
    /* probando si la guessCountvariable es igual a 1(es decir, si este es el primer intento del jugador o no) */
    if (guessCount === 1) {
        userGuess = document.querySelector(".guesses");
        guesses.textContent = 'Previous guesses:';
    };
    guesses.textContent += userGuess + ' ';


    if (userGuess === randomNumber) {

    }

}
checkGuess();