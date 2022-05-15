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