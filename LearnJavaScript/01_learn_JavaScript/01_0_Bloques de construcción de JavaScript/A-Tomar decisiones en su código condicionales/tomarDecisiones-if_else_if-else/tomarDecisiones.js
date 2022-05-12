{
    //! Caso  else...if 

    // *   ¿y si queremos más de dos opciones?

    //*  Hay una manera de encadenar opciones/resultados adicionales a su if...else— usando else if. Cada opción adicional requiere un bloque adicional para colocar entre if() { ... }y else { ... }: consulte el siguiente ejemplo más complicado, que podría ser parte de una aplicación simple de pronóstico del tiempo:

    // const d = document;
    // const seleccion = d.querySelector('select');
    // const parrafo = d.querySelector('p');

    // seleccion.addEventListener('change', indicarClima)


    // function indicarClima() {
    //     const valorSeleccionado = seleccion.value;

    //     if (valorSeleccionado === "Soleado") {
    //         parrafo.textContent = 'Es agradable y soleado afuera hoy. ¡Usa pantalones cortos! Ve a la playa o al parque y tómate un helado.';
    //     }
    //     else if (valorSeleccionado === "Lluvioso") {
    //         parrafo.textContent = 'Afuera está lloviendo; llévate un impermeable y un paraguas, y no te quedes fuera por mucho tiempo.';
    //     }
    //     else if (valorSeleccionado === "nevando") {
    //         parrafo.textContent = '¡Está nevando, se está congelando! Es mejor quedarse en casa con una taza de chocolate caliente o ir a hacer un muñeco de nieve.';
    //     }
    //     else if (valorSeleccionado === "Nublado") {
    //         parrafo.textContent = 'No está lloviendo, pero el cielo está gris y sombrío; podría cambiar en cualquier momento, así que llévate un impermeable por si acaso.';
    //     }
    //     else {

    //         parrafo.textContent = " ";
    //     }

    // }

    {
        // * Queríamos hacer una mención especial a la prueba de valores booleanos ( true/ false) y un patrón común con el que se encontrará una y otra vez. Cualquier valor que no sea ===> false, undefined, null, 0 , NaN o una cadena vacía ('') <=== en realidad regresa true cuando se prueba como una declaración condicional, por lo tanto, puede usar un nombre de variable por sí solo para probar si es true, o incluso si existe (es decir, no está indefinido). Entonces, por ejemplo

        let Queso = 'Cheddarr';
        // let  Queso = '';

        if (Queso) {
            console.log('¡Hurra! Queso disponible para hacer queso sobre tostadas.');
        } else {
            console.log('No hay queso en tostadas para ti hoy.');
        }

    }

}

{
    //!  caso   if ... else Anidados




    // let temperatura = 85;
    // const d = document;
    // const seleccion = d.querySelector('select');
    // const parrafo = d.querySelector('p');

    // seleccion.addEventListener('change', indicarClima)


    // function indicarClima() {
    //     const valorSeleccionado = seleccion.value;

    //     if (valorSeleccionado === "Soleado") {
    //         if (temperatura < 86) {
    //             parrafo.textContent = `la temperatura es de ${temperatura} grados afuera: agradable y soleado.Salgamos a la playa, o al parque, y tomemos un helado.`;
    //         }
    //         else if (temperatura >= 86) {
    //             parrafo.textContent=`Hace ${temperatura} grados afuera — ¡MUCHO CALOR! Si quieres salir, asegúrate de ponerte un poco de protector solar.`;

    //         }
    //     }
    //     else if (valorSeleccionado === "Lluvioso") {
    //         parrafo.textContent = 'Afuera está lloviendo; llévate un impermeable y un paraguas, y no te quedes fuera por mucho tiempo.';
    //     }
    //     else if (valorSeleccionado === "nevando") {
    //         parrafo.textContent = '¡Está nevando, se está congelando! Es mejor quedarse en casa con una taza de chocolate caliente o ir a hacer un muñeco de nieve.';
    //     }
    //     else if (valorSeleccionado === "Nublado") {
    //         parrafo.textContent = 'No está lloviendo, pero el cielo está gris y sombrío; podría cambiar en cualquier momento, así que llévate un impermeable por si acaso.';
    //     }
    //     else {

    //         parrafo.textContent = " ";
    //     }

    // }


}

{

    //! Caso 3 && Y


    let temperatura = 87;
    const d = document;
    // const seleccion = d.getElementById('Tiempo');
    const seleccion = d.querySelector('select');
    const parrafo = d.querySelector('p');

    seleccion.addEventListener('change', indicarClima)


    function indicarClima() {
        const valorSeleccionado = seleccion.value;

        if (valorSeleccionado === "Soleado" && temperatura < 86) {
            parrafo.textContent = `la temperatura es de ${temperatura} grados afuera: agradable y soleado.Salgamos a la playa, o al parque, y tomemos un helado.`;

        }
        else if (valorSeleccionado === "Soleado" && temperatura >= 86) {
            parrafo.textContent = `Hace ${temperatura} grados afuera — ¡MUCHO CALOR! Si quieres salir, asegúrate de ponerte un poco de protector solar.`;

        }

        else if (valorSeleccionado === "Lluvioso") {
            parrafo.textContent = 'Afuera está lloviendo; llévate un impermeable y un paraguas, y no te quedes fuera por mucho tiempo.';
        }
        else if (valorSeleccionado === "nevando") {
            parrafo.textContent = '¡Está nevando, se está congelando! Es mejor quedarse en casa con una taza de chocolate caliente o ir a hacer un muñeco de nieve.';
        }
        else if (valorSeleccionado === "Nublado") {
            parrafo.textContent = 'No está lloviendo, pero el cielo está gris y sombrío; podría cambiar en cualquier momento, así que llévate un impermeable por si acaso.';
        }
        else {

            parrafo.textContent = " ";
        }

    }

}




