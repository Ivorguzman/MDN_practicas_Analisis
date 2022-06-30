const d = document;
const contactos = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975', 'Alex:6213060'];

const $parrafo = d.querySelector('p');
const $inputBuscar = d.getElementById('buscar');
const $buttonBuscar = d.querySelector('button');

$buttonBuscar.addEventListener('click', () => {
    const nombreBuscar = $inputBuscar.value.toLowerCase();
    $buttonBuscar.focus();
    $parrafo.textContent = " ";
    $inputBuscar.focus();
    for (const contacto of contactos) {

        let splitContactos = contacto.split(':');

        if (splitContactos[0].toLowerCase() === nombreBuscar) {
            console.log(`Nombre: ${splitContactos[0]} ==> Seguro N° ${splitContactos[1]}`);
            $parrafo.textContent = `Nombre: ${splitContactos[0]} ==> Seguro N° ${splitContactos[1]}`;
            break;

        }

    }
    if (nombreBuscar === "") {
        console.log(`${nombreBuscar} no esta Registrado`);
        $parrafo.textContent = ` Esta persona  ${nombreBuscar} no esta Registrado`;

    }
});
{
    class myDate extends Date {
        constructor() {
            super();
        }

        getFormattedDate() {
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear();
        }
    }
    let reloj = new myDate()
    reloj
}
    // console.log(splitContactos);


