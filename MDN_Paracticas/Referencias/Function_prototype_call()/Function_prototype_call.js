// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/call

//! Function.prototype.call()

//* call() permite que una función/método que pertenece a un objeto, ser asignada y llamada para un objeto diferente.

//* call() provee un nuevo valor de this a la función/método. Con call(), puedes escribir un método ona vez y heredarlo a otro objeto, sin tener que reescribir el método en el nuevo objeto.

{
    function Producto(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        // this.ValorThis = this

        if (precio < 0)
            throw RangeError('No se puede crear el producto "' + nombre + '" con un precio negativo');

        return this;
    }

    function Comida(nombre, precio) {
        Producto.call(this, nombre, precio);
        this.categoria = 'comida';
        this.ValorThis = this
    }
    Comida.prototype = new Producto();

    function Juguete(nombre, precio) {
        Producto.call(this, nombre, precio);
        this.categoria = 'juguete';
        this.ValorThis = this
    }
    Juguete.prototype = new Producto();

    var queso = new Comida('feta', 5);
    var diversion = new Juguete('robot', 40);
    console.log(queso.precio);
    console.log(queso.nombre);
    console.log(queso.ValorThis);
    console.log(diversion.nombre);
    console.log(diversion.precio);
    console.log(diversion.ValorThis);

}
