

//! switch-case-break-default

//* La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

//     if...elseLas declaraciones hacen bien el trabajo de habilitar el código condicional, pero no están libres de inconvenientes. Son principalmente buenos para los casos en los que tiene un par de opciones, y cada una requiere una cantidad razonable de código para ejecutarse, y/o las condiciones son complejas (por ejemplo, varios operadores lógicos). Para los casos en los que solo desea establecer una variable en una determinada opción de valor o imprimir una declaración particular según una condición, la sintaxis puede ser un poco engorrosa, especialmente si tiene una gran cantidad de opciones.

// En tal caso, las switchdeclaraciones son su amigo: toman una sola expresión/valor como entrada y luego buscan una serie de opciones hasta que encuentran una que coincida con ese valor, ejecutando el código correspondiente que lo acompaña. Aquí hay más pseudocódigo, para que te hagas una idea:




// La palabra clave switch, seguida de un conjunto de paréntesis.

// Una expresión o valor dentro de los paréntesis.

// La palabra clave case, seguida de una opción que podría ser la expresión/valor, seguida de dos puntos.

// Algún código para ejecutar si la elección coincide con la expresión.

// Una breakdeclaración, seguida de un punto y coma. Si la opción anterior coincide con la expresión/valor, el navegador deja de ejecutar el bloque de código aquí y pasa a cualquier código que aparezca debajo de la declaración de cambio.

// Tantos otros casos (puntos 3 a 5) como desee.

// La palabra clave default, seguida exactamente por el mismo patrón de código que uno de los casos (viñetas 3 a 5), ​​excepto que defaultno tiene una opción después y no necesita una breakdeclaración ya que no hay nada que ejecutar después de esto en el bloquear de todos modos. Esta es la opción predeterminada que se ejecuta si ninguna de las opciones coincide.






{
    //! Caso 1 Con un sunico criterio 
    const d = document;
    // const seleccion = d.getElementById("tiempo")
    const etiquetaSeleccionada = d.querySelector("select");
    const parrafo = d.querySelector('em');

    etiquetaSeleccionada.addEventListener('change', indicarClima);

    function indicarClima() {
        let valorSeleccionado = etiquetaSeleccionada.value;
        console.log(valorSeleccionado);
        switch (valorSeleccionado) {
            case 'soleado':
                parrafo.textContent = 'Es agradable y soleado afuera hoy. ¡Usa pantalones cortos! Ve a la playa o al parque y tómate un helado.';
                break;
            case 'lluvioso':
                parrafo.textContent = 'Afuera está lloviendo; llévate un impermeable y un paraguas, y no te quedes fuera por mucho tiempo.';
                break;
            case 'nevando':
                parrafo.textContent = '¡Está nevando, se está congelando! Es mejor quedarse en casa con una taza de chocolate caliente o ir a hacer un muñeco de nieve.';
                break;
            case 'Nublado':
                parrafo.textContent = 'No está lloviendo, pero el cielo está gris y sombrío; podría cambiar en cualquier momento, así que llévate un impermeable por si acaso.';
                break;
            default:
                parrafo.textContent = '';
        }
    }

}
{
    
    var foo = 1;
    var output = 'Salida: ';
    
    switch (foo) {
        case 10:
            output += '¿Y ';
        case 1:
            output += 'Cuál ';
            output += 'Es ';
        case 2:
            output += 'Tu ';
        case 3:
            output += 'Nombre';
        case 4:
            output += '?';
            console.log(output);
            break;
        case 5:
            output += '!';
            console.log(output);
            break;
        default:
            console.log('Por favor, selecciona un valor del 1 al 6.');
    }
}