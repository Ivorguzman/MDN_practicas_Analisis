//* Aprendizaje activo: un calendario sencillo

// En este ejemplo, nos ayudará a terminar una aplicación de calendario simple. En el código tienes:

// Un <select>elemento para permitir al usuario elegir entre diferentes meses.
// Un onchangecontrolador de eventos para detectar cuándo <select>se cambia el valor seleccionado en el menú.

// Una función llamada createCalendar()que dibuja el calendario y muestra el mes correcto en el <h1>elemento.

// Necesitamos que escriba una declaración condicional dentro de la onchangefunción del controlador, justo debajo del // ADD CONDITIONAL HEREcomentario. Debería:

// Mire el mes seleccionado (almacenado en la choicevariable. Este será el <select>valor del elemento después de que cambie el valor, por ejemplo, "enero").

// Establezca una variable llamada dayspara que sea igual al número de días del mes seleccionado. Para ello tendrás que consultar el número de días de cada mes del año. Puede ignorar los años bisiestos a los efectos de este ejemplo.


//! Sugerencias:

// Se recomienda utilizar OR lógico para agrupar varios meses en una sola condición; muchos de ellos comparten el mismo número de días.
// Piense en qué número de días es el más común y utilícelo como valor predeterminado.

/*👉
// {
//     const select = document.querySelector('select');
//     const list = document.querySelector('ul');
//     const h1 = document.querySelector('h1');

//     select.addEventListener('change', () => {
//         const choice = select.value;

//         let days = 31;
//         if (choice === 'February') {
//             days = 28;
//         } else if (choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November') {
//             days = 30;
//         }

//         createCalendar(days, choice);
//     });

//     function createCalendar(days, choice) {
//         list.innerHTML = '';
//         h1.textContent = choice;
//         for (let i = 1; i <= days; i++) {
//             const listItem = document.createElement('li');
//             listItem.textContent = i;
//             list.appendChild(listItem);
//         }
//     }

//     createCalendar(31, 'January');
// }
👈*/

//* El evento ==> .onchange <== se produce cuando el valor de un elemento se ha cambiado.
// Para botones de radio y casillas de verificación, el evento onchange ocurre cuando el estado de activación se ha cambiado.

// Consejo: Este evento es similar a la oninput evento. La diferencia es que el evento oninput se produce inmediatamente después de que el valor de un elemento ha cambiado, mientras que onchange ocurre cuando el elemento pierde el foco, después de que el contenido se ha cambiado. La otra diferencia es que el evento onchange también trabaja en <keygen> y <select> elementos.


//* element.innerHTML
// La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.

// Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.

//? Sintaxis
// const content = element.innerHTML;

// element.innerHTML = htmlString;

//* Document.createElement()
// En un documento HTML, el método Document.createElement() crea un elemento HTML especificado por su tagName



const d = document;
const select = d.querySelector('select');
const h1 = d.querySelector('h1');
const ul = d.querySelector('ul'); //list

select.addEventListener('change', () => {
    const seleccion = select.value; // choice
    let dias = 31;
    switch (seleccion) {
        case 'Febrero':
            dias = 28;
            // console.log(dias);
            break;
        case 'Abril':
        case 'junio':
        case 'Septiembre':
        case 'Nobiembre':
            dias = 30;
            // console.log(dias);
        }
        crearCalendario(dias, seleccion)
});

function crearCalendario(dias, seleccion) {
    console.log(dias, seleccion)
    ul.innerHTML = '';
    h1.textContent = seleccion;
    for (let i = 1; i <= dias; i++){
        const diasCalenario = d.createElement('li'); //listItem 
        diasCalenario.textContent = i;
        ul.appendChild(diasCalenario);
    }

}

// {
//     for (let i = 1; i <= days; i++) {
//         const listItem = document.createElement('li');
//         listItem.textContent = i;
//         list.appendChild(listItem);
//       }
// }





