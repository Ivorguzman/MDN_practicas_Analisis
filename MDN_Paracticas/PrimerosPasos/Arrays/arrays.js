
/*👉https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Arrays👈*/
{
    //    === Pruebas Practicas===
    // the global variable
    let bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

    /* This function should add a book to the list and return the list */
    // New parameters should come before bookName

    // Add your code below this line
    function add(bookList, bookName) {
        let bookListCopy = [...bookList]; // Copy the bookList array to a new array.
        console.log(bookListCopy)
        bookListCopy.push(bookName); // Add bookName parameter to the end of the new array.
        return bookListCopy; // Return the new array.
    }

    /* This function should remove a book from the list and return the list */
    // New parameters should come before the bookName one

    // Add your code below this line
    function remove(bookList, bookName) {
        let bookListCopy = [...bookList]; 
        console.log(bookListCopy)
        if (bookListCopy.indexOf(bookName) >= 0) {
            // Check whether the bookName parameter is in new array.
            bookList.splice(bookListCopy.indexOf(bookName), 1); // Remove the given paramater from the new array.
            return bookListCopy; // Return the new array.
        }
    }

    var newBookList = add(bookList, 'A Brief History of Time');
    var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
    var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

    console.log(bookList);
    console.log(newBookList);
}

{
    /*👉Conversión entre matrices y cadenas👈*/

    {
        // A menudo se te presentarán algunos datos brutos contenidos en una cadena larga y grande, y es posible que desees separar los elementos útiles de una forma más conveniente y luego hacerle cosas, como mostrarlos en una tabla de datos. Para hacer esto, podemos usar el método split(). En su forma más simple, esto toma un único parámetro, el caracter que quieres separar de la cadena, y devuelve las subcadenas entre el separador como elementos en una matriz.
        let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
        let myArray = myData.split(',');
        myArray;


        // Finalmente, intenta encontrar la longitud de tu nueva matriz y recuperar algunos elementos de ella:
        myArray.length;
        console.log(myArray[0]);
        console.log(myArray[2]);
        console.log(myArray[1])


        // También puedes ir en la dirección opuesta usando el método join(). Prueba lo siguiente:

        let myNewString = myArray.join(' | ');
        myNewString;
    }

    {
        // Otra forma de convertir una matriz en cadena es usar el método /*👉toString()👈*/. toString() es posiblemente  más simple que join() ya que no toma un parámetro, pero es más limitado. Con /*👉join()👈*/ puedes especificar diferentes separadores (intenta ejecutar el Paso 4 con un caracter diferente a la coma).

        let dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger'];
        console.log(dogNames.toString());


        /*👉Agregar y eliminar elementos de la matriz👈*/

        // Todavia no hemos cubierto la posibilidad de agregar y eliminar elementos de la matriz — echemos un vistazo a esto ahora. Usaremos la matriz myArray con la que terminamos en la última sección. Si todavía no has seguido esa sección, primero crea la matriz en tu consola:

        let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];


        // Antes que nada, para añdir o eliminar un elemento al final de una matriz podemos usar push() y pop() respectivamente.

        console.log(myArray.push('Cardiff'));// longitud del array ( .lenght )  mostrandola no almacenandola ==>
        console.log(myArray);
        console.log(myArray.push('Bradford', 'Brighton'));// longitud del array ( .lenght ) mostrandola no almacenandola ==>
        console.log(myArray);


        // La nueva longitud de la matriz se devuelve cuando finaliza la llamada al método. Si quisieras almacenar la nueva longitud de matriz en una variable, podrías hacer algo como esto: 
        //almacenandoa la longitud del array
        let newLength = myArray.push('Bristol');
        myArray;
        newLength; // longitud del array ( .lenght ) almacenada ==>

        /*👉 Eliminar el último elemento de una matriz es tan simple como ejecutar pop() en ella. Prueba esto:👈*/

        console.log(myArray.pop()); // Elemento eliminado de la ultima pósicion del array mostrando no almacenando ==>
        myArray
        console.log(myArray.length) // longitud del array ==>
        console.log(myArray.length - 1) // Ultimo indice del araay ==>


        // El elemento que sé eliminó se devuelve cuando se completa la llamada al método. Para guardar este elemento en una variable, puedes hacer lo siguiente:

        let removedItem = myArray.pop();
        myArray;
        removedItem; //  Elemento Borrado almacenado almacenando ==>

    }



    {

        /*👉 unshift() y shift() 👈*/
        //funcionan exactamente igual de/*👉 push() y pop()👈*/, respectivamente, excepto que funcionan al principio de la matriz, no al final.


        // Primero unshift() — prueba el siguiente comando:
        let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
        myArray.unshift('Edinburgh', 'Napoles');
        myArray

        // Ahora shift(); prueba estos
        let removedItem = myArray.shift();
        myArray;
        removedItem;
    }

}











{

    /*👉  
    
    Aprendizaje activo: ¡Imprimiendo esos productos!

     Debajo de // number 1hay un número de cadena, cada una de las cuales contiene un nombre de producto y un precio separado por dos puntos. Nos gustaría que conviertas esto en una matriz y lo almacenemos en una matriz llamada products.
    En la misma línea que el comentario // number 2es el comienzo de un ciclo for. En esta línea, actualmente tenemos i <= 0, que es una prueba condicional que hace que el bucle que el bucle for se detenga inmediatamente, porque dice "detener cuando ies menor o igual 0", y  icomienza en 0. Nos gustaría que reemplazaras esto con una prueba condicional que detenga el ciclo cuando ino sea inferior a la longitud de la matriz products.
    justo debajo del comentario // number 3queremos que escriba una línea de código que divida el elemento actual de la matriz ( nombre:precio) en dos elementos separados, uno que contiene solo el nombre y otros que contienen solo el precio. Si no está seguro de cómo hacerlo, consulte el artículo Métodos de cadenas útiles para obtener ayuda o, mejor aún, consulte la sección Conversión entre cadenas y arreglos de este artículo.
    Como parte de la línea de código anterior, también querras convertir el precio de una cadena a un número. Si no pude recordar cómo hacerlo, consulte el primer artículo de cadenas .
    Hay una variable llamada totalque se crea y se le da un valor de 0 en la parte superior del código. Dentro del ciclo (debajo de // number 4) queremos que agregues una línea que agrega el precio actual del artículo a ese total en cada iteración del ciclo, de modo que al final del código el total correcto se imprima en la factura. Es posible que necesite un operador de regulador para hacer esto.
    Queremos que changes la línea justo de bajo // number 5para que la variable itemTextse iguale a "nombre de elemnto actual — $precio de elemento actual", por ejemplo "Zapatos — $23.99" en cada caso, por lo que la ionformación correcta artículo está impreso en la Factura. Esto es simplemente una concatenación de cadenas, lo que debería ser familiar para ti.👈*/

    {
        var total = 0;

        // number 1
        let products = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];


        for (var i = 0; i > products.length; i++) { // number 2
            // number 3

            // number 4

            // number 5
            itemText = 0;

        }


    }

    var total = 0;
    let invetario = [];

    var products = ['Underpants:6.99',
        'Socks:5.99',
        'T-shirt:14.99',
        'Trousers:31.99',
        'Shoes:23.99'];

    for (var i = 0; i < products.length; i++) {
        console.log(i)
        var subArray = products[i].split(":");
        console.log(subArray)
        var name = subArray[0];
        console.log(name)
        var price = Number(subArray[1]);
        console.log(price)
        total += price;
        console.log(total)
        let itemText = name + ': $' + price.toFixed(2);
        invetario[i] = itemText;
        console.log(itemText)
    }
    console.log(total.toFixed(2))
    console.log(invetario)
    listaPrecios = invetario.join(' | ');
    console.log(listaPrecios)


}

