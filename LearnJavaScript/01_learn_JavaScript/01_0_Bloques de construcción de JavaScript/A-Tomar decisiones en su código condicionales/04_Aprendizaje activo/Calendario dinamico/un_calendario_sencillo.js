//* Aprendizaje activo: un calendario sencillo

// En este ejemplo, nos ayudará a terminar una aplicación de calendario simple. En el código tienes:

// Un <select>elemento para permitir al usuario elegir entre diferentes meses.
// Un onchangecontrolador de eventos para detectar cuándo <select>se cambia el valor seleccionado en el menú.

// Una función llamada createCalendar()que dibuja el calendario y muestra el mes correcto en el <h1>elemento.

// Necesitamos que escriba una declaración condicional dentro de la onchangefunción del controlador, justo debajo del // ADD CONDITIONAL HEREcomentario. Debería:

// Mire el mes seleccionado (almacenado en la choicevariable. Este será el <select>valor del elemento después de que cambie el valor, por ejemplo, "enero").

// Establezca una variable llamada dayspara que sea igual al número de días del mes seleccionado. Para ello tendrás que consultar el número de días de cada mes del año. Puede ignorar los años bisiestos a los efectos de este ejemplo.





//* El evento ==> .onchange <== se produce cuando el valor de un elemento se ha cambiado.
// Para botones de radio y casillas de verificación, el evento onchange ocurre cuando el estado de activación se ha cambiado.

// Consejo: Este evento es similar a la oninput evento. La diferencia es que el evento oninput se produce inmediatamente después de que el valor de un elemento ha cambiado, mientras que onchange ocurre cuando el elemento pierde el foco, después de que el contenido se ha cambiado. La otra diferencia es que el evento onchange también trabaja en <keygen> y <select> elementos.


//* element.innerHTML
// La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.

// Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.

//! Sintaxis
// const content = element.innerHTML;

// element.innerHTML = htmlString;

//* Document.createElement()
// En un documento HTML, el método Document.createElement() crea un elemento HTML especificado por su tagName

// * Nodo appendChild
// Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.

// Si el hijo(Child) es una referencia(hace referencia) hacia un nodo existente en el documento actual, este es quitado del padre actual para ser puesto en el nodo padre nuevo. La clave está en si el (Child) es una referencia a un nodo existente en el documento.

const d = document;
let dias = 31;
const $select = d.querySelector('select');
const $h1 = d.querySelector('h1');
const $li = d.querySelectorAll('li');
// const ul = d.querySelector('ul'); //list
// let diasCalenario = d.createElement('li');
$h1.textContent = 'Seleccione un mes';

$select.addEventListener('change', function () {
    

        const seleccion = $select.value; // choice

        switch (seleccion) {
            case 'Febrero':
                dias = 28;
                console.log($select.selectedIndex);
                break;
            case 'Abril':
            case 'Junio':
            case 'Septiembre':
            case 'Noviembre':
                console.log($select.selectedIndex);
                dias = 30;
                break;
            case "":
                aler($select.selectedIndex);
            default:
                dias = 31;
                console.log($select.selectedIndex);

        }
        crearCalendario(dias, seleccion)



});
    
function crearCalendario(dias, seleccion) {
    console.log(` estoy dentro de la funciocrearCalendario ()  y este es el indice que la invoco = ${$select.selectedIndex}`)
    console.log(dias, seleccion);


     /* ============================== */
    if ($select.selectedIndex === 0) { 
    const $ul = d.getElementById('ul');
    $ul.innerHTML = ' ';
    $h1.textContent = seleccion
    }  
    /* ============================== */

    const $ul = d.getElementById('ul');
    $ul.innerHTML = '';
    $h1.textContent = seleccion
    for (let i = 1; i <= dias; i++) {
        $h1.textContent = seleccion;
        console.log($h1.textContent);
        const $li = d.createElement('li');
        console.log($li )
        $li.innerHTML = `<li class="li__dias">${i}</li>`;
        console.log($li.innerHTML = `<li class="li__dias">${i}</li>`)
        $ul.appendChild($li)
        console.log($ul.appendChild($li))

    }
}
// limpiar() 
        
// function limpiar() {
//     for (let i = 0; i <= dias; i++){
//        console.log(li)
//   }
   
// }

/*👉

{
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
        for (let i = 1; i <= dias; i++) {
            const li = d.createElement('li'); //listItem 
            li.textContent = i;
            ul.appendChild(li);
        }

    }
}
👈*/