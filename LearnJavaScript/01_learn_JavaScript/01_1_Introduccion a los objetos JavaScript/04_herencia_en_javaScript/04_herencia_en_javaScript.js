// https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

{
    console.log("----Herencia prototípica----");

    /// "---Persona-----"

    function Persona(nombrePila, apellido, edad, genero, intereses) {
        this.nombre = {
            nombrePila,
            apellido
        };
        this.edad = edad;
        this.genero = genero;
        this.intereses = intereses;
    };

    Persona.prototype.saludo = function () {
        console.log(this);
        console.log('¡Hola! soy ' + this.nombre.nombrePila + '.');
    };
    Persona.prototype.despedida = function () {
        console.log(`${this.nombre.nombrePila} a dejado el edificio. ¡Adiós por ahora!`);
    };

    ///"---Profesor-----"
    function Profesor(nombrePila, apellido, edad, genero, intereses, materia) {
        console.log(this);
        this.materia = materia;
        Persona.call(this, nombrePila, apellido, edad, genero, intereses);// Aqui se atasca el serrucho
    }
    Profesor.prototype = Object.create(Persona.prototype);
    Profesor.prototype.constructor = Profesor;

    let Juan = new Persona('Juan', 'Perez', 25, 'masculino', ['cine', 'tecnología', 'música'], 'Matemáticas');

    let Maria = new Persona('Maria', 'Hurtado', 22, 'femenino', ['cine', 'teologia', 'trotar'], 'Historia Religiosa');


    Profesor.prototype.saludo = function () {
        console.log(this);

        let prefijo;

        if (this.genero === 'M' || this.genero === 'm' || this.genero === 'Masculino' || this.genero === 'masculino') {
            prefijo = 'Sr.';
        }
        else if (this.genero === 'F' || this.genero === 'f' || this.genero === 'Femenino' || this.genero === 'femenino') {
            prefijo = 'Sra.';
        }
        else {
            prefijo = 'Por favor Anunciece';
        }
        console.log(('Hola. Mi nombre es ' + prefijo + ' ' + this.nombre.apellido + ', y enseño ' + this.materia + '.'));

        console.log(this);
    };
    console.log("-----profesor1--------");

    let profesor1 = new Profesor('Juan', 'Perez', 25, 'masculino', ['cine', 'tecnología', 'música'], 'Matemáticas');

    profesor1.saludo();
    console.log(profesor1 instanceof Profesor);
    console.log(profesor1.nombre.nombrePila);
    console.log(profesor1.nombre.apellido);
    console.log(profesor1.edad);
    console.log(profesor1.genero);
    console.log(profesor1.intereses);
    console.log(profesor1.materia);
    profesor1.despedida();

    console.log("-----profesor2--------");

    let profesor2 = new Profesor('Maria', 'Hurtado', 22, 'femenino', ['cine', 'teologia', 'trotar'], 'Historia Religiosa');
    profesor2.saludo();
    console.log(profesor2 instanceof Profesor);
    console.log(profesor2.nombre.nombrePila);
    console.log(profesor2.nombre.apellido);
    console.log(profesor2.edad);
    console.log(profesor2.genero);
    console.log(profesor2.intereses);
    profesor2.despedida();

}


// * === --------------------------------------- ===


{

    console.log("----Refactoriuzando Ejercicio a Sintaxis de Clases----");

    console.log("----Clases ECMAScript 2015----");

    class Persona {
        constructor(nombrePila, apellido, edad, genero, intereses) {
            this.nombre = {
                nombrePila,
                apellido
            };
            this.edad = edad;
            this.genero = genero;
            this.intereses = intereses;
        };
        saludo = function () {
            console.log(this);
            console.log('¡Hola! soy ' + this.nombre.nombrePila + '.');
        };
        despedida = function () {
            console.log(`${this.nombre.nombrePila} a dejado el edificio. ¡Adiós Gracias por su visita!`);

        };
        myThisEs = function () {
            console.log(this);
        };

    };


    let pedro = new Persona('Pedro', 'Sanches', 29, 'masculino', ['cine', 'tecnología', 'Spining'], 'Matemáticas');

    let ana = new Persona('Ana', 'Hurtado', 32, 'femenino', ['cine', 'teologia', 'Spining'], 'Historia Religiosa');

    pedro.saludo();
    pedro.despedida();
    pedro.myThisEs();


    console.log("----Herencia con sintaxis de clase----");


    /// La  palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.

    /// La palabra clave super() se usa para acceder a las propiedades en un objeto literal o en el [[Prototipo]] de una clase, o para invocar al constructor de una superclase.

    class Profesor extends Persona {
        constructor(nombrePila, apellido, edad, genero, intereses, materia) {
            super(nombrePila, apellido, edad, genero, intereses);
            this.nombre = {
                nombrePila,
                apellido
            },
                this.edad = edad,
                this.genero = genero,
                this.intereses = intereses,
                this.materia = materia;
        };


        saludo = function () {
            console.log(this);


            let prefijo;

            if (this.genero === 'M' || this.genero === 'm' || this.genero === 'Masculino' || this.genero === 'masculino') {
                prefijo = 'Sr.';
            }
            else if (this.genero === 'F' || this.genero === 'f' || this.genero === 'Femenino' || this.genero === 'femenino') {
                prefijo = 'Sra.';
            }
            else {
                prefijo = 'Por favor Anunciece';
            }
            console.log(('Hola. Mi nombre es ' + prefijo + ' ' + this.nombre.apellido + ', y enseño ' + this.materia + '.'));

            console.log(this);
        };



    };


    console.log("-----profesor3--------");
    let profesor3 = new Profesor('Marcos', 'Molina', 50, 'masculino', ['cine', 'tecnología', 'Spining'], 'Matemáticas');

    profesor3.saludo();
    console.log(profesor3 instanceof Profesor);
    console.log(profesor3.nombre.nombrePila);
    console.log(profesor3.nombre.apellido);
    console.log(profesor3.edad);
    console.log(profesor3.genero);
    console.log(profesor3.intereses);
    console.log(profesor3.materia);
    profesor3.despedida();
    profesor3.myThisEs();


    console.log("-----profesor4--------");
    let profesor4 = new Profesor('Sonia', 'Rodriguez', 42, 'femenino', ['cine', 'teologia', 'Spining'], 'Historia Religiosa');

    profesor4.saludo();
    console.log(profesor4 instanceof Profesor);
    console.log(profesor4.nombre.nombrePila);
    console.log(profesor4.nombre.apellido);
    console.log(profesor4.edad);
    console.log(profesor4.genero);
    console.log(profesor4.intereses);
    profesor4.despedida();










}
