{
    function myFunc(theObject) {
        theObject.make = 'Toyota';
    }

    var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
    var x, y;

    x = mycar.make; // x obtiene el valor "Honda"

    myFunc(mycar);
    console.log(y = mycar.make); // y obtiene el valor "Toyota"
    // (la propiedad make fue cambiada por la función)unción
}
this