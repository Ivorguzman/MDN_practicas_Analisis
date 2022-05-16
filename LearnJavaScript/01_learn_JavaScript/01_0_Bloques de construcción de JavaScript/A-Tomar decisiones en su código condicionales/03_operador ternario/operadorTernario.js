//! operador ternario

// Hay una parte final de la sintaxis que queremos presentarle antes de que juegue con algunos ejemplos. El operador ternario o condicional es una pequeña parte de la sintaxis que prueba una condición y devuelve un valor/expresión si lo es truey otro si lo es false; esto puede ser útil en algunas situaciones y puede ocupar mucho menos código que un if...elsebloque . si tiene dos opciones que se eligen a través de una true/ falsecondición. El pseudocódigo se ve así:
{

    const d = document;
    const select = d.querySelector('select');
    const html = d.querySelector('html');
    d.body.style.padding = '60px';

    function colorTema(colorFondo, colorTexto) {
        html.style.backgroundColor = colorFondo;
        html.style.color = colorTexto;


    }
    select.addEventListener('change', () => (select.value === 'negro') ? colorTema('#2F4F4F', '') : colorTema('white', ''));

}







