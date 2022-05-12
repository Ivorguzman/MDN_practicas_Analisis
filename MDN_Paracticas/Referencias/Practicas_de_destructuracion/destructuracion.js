
//* NOTA: PARA PROFUNDISAR EN EL ESTUDIO DE DESTRUCTURACION HACERLO EN:

//! https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 

//* La desestructuración

//? La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables. 



// *** EJEMPLO SIN DESTRUCTURACIÓN EN [ARREGLOS] ***
console.log('*** EJEMPLO SIN DESTRUCTURACIÓN ***');
const numeros = [1, 2, 3,];

let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];
console.log(uno, dos, tres);

console.log("")


// *** EJEMPLO CON DESTRUCTURACIÓN EN [ARREGLOS] (const_B [?,?,?] = const_A ==> sus valores en indice)  ***
console.log('*** EJEMPLO CON CON  DESTRUCTURACIÓN ***');
const [numeroUno, numeroDos, numeroTres] = numeros; // destructurando el arreglo.
console.log(numeroUno, numeroDos, numeroTres);// =>123

console.log("")


// *** EJEMPLO  DESTRUCTURACIÓN OBJETOS ***
console.log('*** EJEMPLO  DESTRUCTURACIÓN OBJETOS ***');

const persona = {
    nombre: "Alex",
    apellido: "Guzmán",
    edad: 55
}
const { nombre, apellido, edad } = persona;// DESTRUCTURANDO EL {OBJETO}  (const_A { ?,?,?} = const_B ==> los valores en  sus propiedades);
/* NOTA: LA VARIABLE QUE SE CREA DEBE TENER EL MISMO NOMBRE DE LA PROPIEDAD QUE VINCULA*/
console.log(' NOTA LA VARIABLE QUE SE CREA DEBE TENER EL MISMO NOMBRE DE LA PROPIEDAD QUE VINCULA')
console.log(nombre, apellido, edad)//=> Alex Guzmán 55
console.log(persona.nombre)//=> Alex Guzmán 55
console.log(persona.apellido)//=> Alex Guzmán 55
console.log(persona.edad)//=> Alex Guzmán 55

/* ________________________________________________________ */
console.log("________________________________________________________")
{
    let a, b, masNumeros;

    console.log("Sintaxis 1:");
    [a, b] = [10, 20];

    console.log(a);
    console.log(b);
}
/* ________________________________________________________ */

{
    console.log("Sintaxis 2:");
    [a, b, ...todosLosDemas] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    console.log(a);
    console.log(b);
    console.log(todosLosDemas);
}
/* ________________________________________________________ */

{
    console.log("Sintaxis 3:");
    ({ a, b } = { a: 200, b: 300 });

    console.log(a, b);
}
/* ________________________________________________________ */
{
    console.log("Sintaxis 4:");
    const x = [1, 2, 3, 4, 5];
    const [y, w, z] = x;

    console.log(y);
    console.log(w);
    console.log(z);
    /* ________________________________________________________ */

    console.log("Sintaxis 5:");
    const l = [1, 2, 3, 4, 5, 6, 7, 8];
    const [m, n, o, ...todoLoDeMas] = l;

    console.log(m);
    console.log(w);
    console.log(z);
    console.log(todoLoDeMas);

    console.log("");

    /* Desestructuración de arreglos */
    console.log('*** Desestructuración de arreglos ****');
    console.log("  ");

    /* Asignación básica de variables */
    console.log(' === Asignación básica de variable ===');

    const arregloNumeros = ['unoRojo', 'dosAmarillo', 'tresVerde'];
    const [rojo, amarillo, verde] = arregloNumeros;

    console.log(rojo, amarillo, verde);
}
/* _____________________________________________________ */
console.log('/* _____________________________________________________ */')


{
    console.log(' === Asignación sin declaración ===');
    /*
 A una variable se le puede asignar su valor mediante una desestructuración separada de la declaración de la variable. */

    let a, b;
    [a, b] = [1, 2];
    console.log(a);
    console.log(b);


}
/* _____________________________________________________ */
console.log('/* _____________________________________________________ */')




{
    console.log(' === Valores predeterminados ===');
    /* 
A una variable se le puede asignar un valor predeterminado, en el caso de que el valor desempacado del arreglo sea undefined. */
    let a, b;
    [a = 5, b = 7] = [20];
    console.log(a);
    console.log(b);


}

/* _____________________________________________________ */
console.log('/* _____________________________________________________ */')


console.log(' === Intercambio de variables ===');
/* -Sin desestructurar la asignación, intercambiar dos valores requiere una variable temporal */
{
    let a = 1;
    let b = 2;
    let tmp;
    console.log(a);
    console.log(b);
    tmp = a;
    a = b;
    console.log(a);
    console.log(b);
}
/* _____________________________________________________ */
console.log('/* _____________________________________________________ */')

{
    {
        console.log('Los valores de dos variables se pueden intercambiar en una  sola expresión de desestructuración.')

        console.log("Ejemplo 1:");
        let a = 10;
        let b = 20;
        console.log(a);
        console.log(b);

        [a, b] = [b, a]; // Valor destructurado;

        console.log("")
        console.log(a);
        console.log(b);
    }

    console.log(' _____________________________________________________ ')

    console.log("Ejemplo 2:");

    {
        const arr = [1, 2, 3];
        [arr[0], arr[2]] = [arr[2], arr[0]]
        console.log(arr);// [3,2,1]
    }
    {
        const arr = [1, 2, 3];
        [arr[0] = arr[2], arr[2] = arr[0]] //OJO DIFERENTE RESULTADO [3,2,3]
        console.log(arr)
    }
}
console.log('/* _____________________________________________________ */')
console.log(' === Desestructuración de objetos ===');

{
    console.log(' === Asignación básica  ===');

    const usuario = {
        id: 42,// Propiedad
        estaVerificada: true// Propiedad
    };

    const { estaVerificada } = usuario
    /* NOTA: LA VARIABLE TIENE QUE TENER EL MISMO NOMBRE QUE LA PROPIEDAD QUE ALMACENA */
    console.log(estaVerificada);
}
{
    console.log(' === Asignación sin declaración ===');
    let a;
    let b;
    const { a, b } = { a: 1, b: 2 }
        ({ a, b } = { a: 10, b: 20 })
    console.log(a); //?
    console.log(b);

    /* {Notas :}
    1)  los paréntesis (?????) alrededor de la declaración de asignación son obligatorios cuando se usa la desestructuración de un objeto literal sin una declaración. debodo a que  {a, b} = {a: 1, b: 2} no es una sintaxis independiente válida, por la razon de que  {a, b} en el lado izquierdo se considera un bloque y no un objeto literal.
    Sin embargo, ({a, b} = {a: 1, b: 2}) es válido, al igual que const {a, b} = {a: 1, b: 2}

    2)  Tu expresión (????? ) debe estar precedida por un punto y coma o se puede usar para ejecutar una función en la línea anterior. */
}

{
    Desestructuración combinada de arreglos y objetos
    // La desestructuración de arreglos y objetos se puede combinar. Supongamos que deseas manipular el tercer elemento del siguiente arreglo props, y luego deseas la propiedad nameen el objeto, puedes hacer lo siguiente:

    const props = [
        { id: 1, name: 'Fizz' },
        { id: 2, name: 'Buzz' },
        { id: 3, name: 'FizzBuzz' }
    ];

    const [, , { name }] = props;

    console.log(name); // "FizzBuzz"
}


