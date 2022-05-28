/* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code */

// * Metodo .focus()
// El método de enfoque de JavaScript se utiliza para enfocar un elemento html. Establece el elemento como el elemento activo en el documento actual. Se puede aplicar a un elemento html a la vez en un documento actual. El elemento puede ser un botón, un campo de texto, una ventana, etc. Es compatible con todos los navegadores.
// Sintaxis:
// * Nota:
// Parámetros: No acepta ningún parámetro.
// Valor devuelto: este método no devuelve ningún valor.

// /Las varaibles que se usan en el codigo  con signo $ son variables que repretan etiquetas html:



const d = document; w = window;

const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];

const $p_outPut = d.querySelector('p');
const $input_name = d.querySelector('input');
const $btn = d.querySelector('button');



$btn.addEventListener('click', () => {

    /* === Declaración de  constantes y variables */

    const searchName = $input_name.value.toLowerCase();
    $input_name.value = '';
    $input_name.focus();
    $p_outPut.textContent = '';

    /* ===  Codigo === */

    for (const contact of contacts) {
        const splitContact = contact.split(':');
        if (splitContact[0].toLowerCase() === searchName) {
            $p_outPut.textContent = splitContact[0] + " \'s Social security: " + splitContact[1] + ".";
            break;
        }
       
        if (splitContact[0].toLowerCase() !== searchName|| splitContact==='') {
            $p_outPut.textContent = searchName + ' Not found in the contacts.';
        }
    }


});
