

//!  https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#creacion_de_la_jerarquia


/* El resto de este capitulo utiliza la jerarquía employee que se muestra en la siguiente figura.*/

// Employee tiene las propiedades name (cuyo valor por defecto es un string vacío) y dept (cuyo valor por defecto es "general").

// Manager está basado en Employee. Añade la propiedad reports (cuyo valor por defecto es un array vacío, en la que se pretende almacenar un array de objetos Employee como su valor).

// WorkerBee también está basado en Employee. Añade la propiedad projects (cuyo valor por defecto es un array vacío en el que se pretende almacenar un array de strings como su valor).

// SalesPerson está basado en WorkerBee. Añade la propiedad quota (cuyo valor por defecto es 100). También reemplaza la propiedad dept con el valor "sales", indicando que todas las salespersons están en el mismo departamento.

// Engineer se basa en WorkerBee. Añade la propiedad machine (cuyo valor por defecto es un string vacío) y también reemplaza la propiedad  dept con el valor "engineering".





{
    // Definiciones de los objetos de la jerarquía Employee (figura 8.2)

    // ==>  Employee
    function Employee() { //Constructor
        //propiedades con valores  asignados por defecto 
        this.name = "***";
        this.dept = "***";
    }


    // ==> Manager
    function Manager() {
        this.reports = ["***"];
    }
    Manager.prototype = new Employee; //instancia prototípica como el valor de la propiedad prototype 


    // ==> WorkerBee
    function WorkerBee() {
        this.projects = ["***"];

    }
    WorkerBee.prototype = new Employee; //instancia prototípica como el valor de la propiedad prototype 



    // ==> SalesPerson
    function SalesPerson() {
        this.dept = "sales";
        this.quota = 100;
    }
    SalesPerson.prototype = new WorkerBee;





    function Engineer() {
        this.dept = "engineering";
        this.machine = "";
    }

    Engineer.prototype = new WorkerBee;


    // Estudiado la Herencia
    let empleado = new Employee;
    let gerente = new Manager;
    let talento = new WorkerBee;
    let ventas = new SalesPerson;
    let ingenieros = new Engineer;



    console.log("")
    console.log("__empleado__")


    console.log(empleado.name)
    console.log(empleado.dept)

    console.log("")
    console.log("__gerente__")

    console.log(gerente.name)
    console.log(gerente.dept)
    console.log(gerente.reports)

    console.log("")
    console.log("_talento__")

    console.log(talento.name)
    console.log(talento.dept)
    console.log(talento.projects)

    console.log("")
    console.log("_personal Ventas__")

    console.log(ventas.name)
    console.log(ventas.dept)
    console.log(ventas.projects)
    console.log(ventas.dept)
    console.log(ventas.quota)

    console.log("")
    console.log("_Ingenieros__")

    console.log(ingenieros.name)
    console.log(ingenieros.dept)
    console.log(ingenieros.projects)
    console.log(ingenieros.dept)
    console.log(ingenieros.machine)



    console.log("")
    console.log("=== Herencia de propiedades ===")

    // Creando objetos con definiciones simples figura 8.3


    let jim = new Employee; // crea un nuevo objeto 
    console.log(jim.name);
    console.log(jim.dept);

    let sally = new Manager; // crea un nuevo objeto 
    console.log(sally.name);
    console.log(sally.dept);
    console.log(sally.reports);

    let mark = new WorkerBee; // crea un nuevo objeto y pasa este nuevo objeto como (this) a la función constructora de WorkerBee  ==>[function WorkerBee() {}]
    console.log(mark.name);
    console.log(mark.dept);
    console.log(mark.projects);
    console.log(mark);

    let fred = new SalesPerson; // crea un nuevo objeto 
    console.log(fred.name);
    console.log(fred.dept);
    console.log(fred.quota);
    console.log(fred.projects);

    let jane = new Engineer; // crea un nuevo objeto 
    console.log(jane.name);
    console.log(jane.dept);
    console.log(jane.projects);
    console.log(jane.machine);


    // propiedades heredadas de {Employee}==> ( WorkerBee.prototype = new Employee)
    console.log(mark.name = "Ivor Guzman Zambrano");
    console.log(mark.dep = "Admin");
    // propidead directa de  function WorkerBee(){} ==>  { this.projects = ["***"];}
    console.log(mark.project = ["Navegacion"]);


    console.log("")
    console.log("=== Añadir propiedades ===")
    // En JavaScript puedes añadir propiedades a los objetos en tiempo de ejecución
    mark.bonus = 3000;
    // Ahora el objeto marktiene una propiedad bonus, pero ningún otro objeto creado con la función constructor WorkerBee tiene esta propiedad.


    // Si añades una nueva propiedad a un objeto que se está utilizando como el prototipo de una función constructor , dicha propiedad se agrega a todos los objetos que heredan propiedades de dicho prototipo

    // === Ejemplo:===

    Employee.prototype.specialty = "none";

    console.log(jim.specialty);
    console.log(sally.specialty);
    console.log(jane.specialty);
    console.log(fred.specialty);
    console.log(mark.specialty);



    console.log("")
    console.log("=== Constructores más flexibles ===")


    function Employee(name, dept) {
        this.name = name || "***";
        this.dept = dept || "General"
    }



    console.log("_________________________");
    let juan = new Employee("Jones, Jim")
    console.log(juan.name);
    console.log(juan.dept);



    console.log("_________________________");
    let pedro = new Employee("", "Base de datos")
    console.log(pedro.name);
    console.log(pedro.dept);



    console.log("_________________________");
    let alex = new Employee();
    console.log(alex.name);
    console.log(alex.dept);
    console.log("_________________________");
    console.log(alex.name = "Alexander");
    console.log(alex.dept = "Desarrollo de sofware");




    console.log("_________________________");
    function WorkerBee(projs) {
        this.projects = projs || [];
    }
    WorkerBee.prototype = new Employee;



    console.log("_________________________");
    function Engineer(mach) {
        this.dept = "engineering";
        this.machine = mach || "";
    }
    Engineer.prototype = new WorkerBee;

    {
        console.log("")
        console.log("===Valores locales frente a valores heredados===")
        // Cuando accedes a una propiedad de un objeto, JavaScript realiza estos pasos, tal como se describió más arriba en este capítulo:
        //   1. Comprueba si el valor existe localmente. Si existe, se devuelve ese valor.
        //    2. Si no existe un valor local, comprueba la cadena de prototipos (usando la propiedad __proto__).

        // 3. Si algún objeto en la cadena de prototipos tiene un valor para la propied
        // 4. Si no encuentra la propiedad en la cadena de prototipos, el objeto no tiene la propiedad.



        function Employee() {
            this.name = "";
            this.dept = "general";
        }


        function WorkerBee() {
            this.projects = [];
        }
        WorkerBee.prototype = new Employee();

        let amy = new WorkerBee();

        // El objeto amy tiene una propiedad local, projects. Los valores de las propiedades name y dept no son locales para amy y por eso se obtienen de la propiedad __proto__ del objeto. Por ello, amy tiene estos valores en sus propiedades:

        console.log(amy.name == "");
        console.log(amy.dept == "general");
        console.log(amy.projects == []);


        console.log("_________________________");
        Employee.prototype.name = "Unknown";

        console.log(amy.name == "");
        console.log(amy.dept == "general");
        console.log(amy.projects == []); // Ojo por que es False
        console.log(amy.projects);// []

        // A primera vista, esperarías que el nuevo valor se propague hacia abajo a todas las instancias de Employee. Pero no es esto lo que ocurre.

        // Cuando se crea una instancia del objeto Employee, ésta obtiene un valor local para la propiedad name (la cadena vacía). Esto significa que cuando se da valor al prototipo de WorkerBee mediante la creación de un nuevo objeto Employee, WorkerBee.prototype tiene un valor local para la propiedad name. Por tanto, cuando JavaScript busca la propiedad name del objeto amy (una instancia de WorkerBee), JavaScript encuentra el valor local de esa propiedad en WorkerBee.prototype. Por tanto no busca más arriba en la cadena hasta Employee.prototype.
    }
    console.log("_________________________");
    {

        function Employee() {
            this.dept = "general";
        }
        Employee.prototype.name = "";


        function WorkerBee() { }
        WorkerBee.prototype.projects = []

        WorkerBee.prototype = new Employee;

        var amy = new WorkerBee;

        Employee.prototype.name = "Unknown";

        console.log(amy.name == "Unknown");
        console.log(amy.dept == "general");
        console.log(amy.projects == []); // Ojo por que es False otraves

    }
    console.log("_________________________");
    {
        console.log("")
        console.log("=== Determinar las relaciones entre instancias===")

        // La búsqueda de propiedades en la cadena de prototipos comienza en las propiedades locales del objeto y si no se encuentran localmente, se busca a través de la propiedad { __proto__} del objeto. La búsqueda continúa recursivamente, conociéndose como "búsqueda en la cadena de prototipos".

        // La propiedad especial __proto__ de un objeto recibe su valor en el momento en el que es creado; se le asigna el valor de la propiedad prototype de la función constructor usada para crear el objeto. Así, la expresión new Foo() crea un objeto con __proto__ == Foo.prototype. Por tanto, los cambios que se realicen en las propiedades de Foo.prototype alteraran la búsqueda de propiedades de todos los objetos que se crearon mediante new Foo().

        /*👉Todo objeto tiene una propiedad __proto__ (salvo Object); toda función tiene una propiedad prototype. Es así como los objetos pueden relacionarse mediante 'herencia de prototipos' con otros objetos. Puedes comprobar la herencia comparando el valor de la propiedad __proto__ con el valor de prototype de una función constructor. JavaScript proporciona un atajo: el operador instanceof que compara un objeto con una función constructor y devuelve true si el objeto hereda del prototipo de la función. Por ejemplo,👈*/

        function Foo() {
            this.postre = "Tortas, Quesillo"
        }
        Foo.prototype.carrito = "";


        let f = new Foo();
        console.log(f instanceof Foo) // Operador instanceof
    }

    let chris = new Engineer("Pigman, Chris", ["jsd"], "fiji");

    console.log(chris.__proto__ == Engineer.prototype);
    console.log(chris.__proto__.__proto__ == WorkerBee.prototype);
    console.log(chris.__proto__.__proto__.__proto__ == Employee.prototype);
    console.log(chris.__proto__.__proto__.__proto__.__proto__ == Object.prototype);
    console.log(chris.__proto__.__proto__.__proto__.__proto__.__proto__ == null);

    console.log(chris)

    console.log("_________________________");


    {
        console.log("")
        console.log("=== Determinar las relaciones entre instancias===")
        //  https:developer.mozilla.org/es/docs/Web/JavaScript/Guide/Details_of_the_Object_Model


        console.log("")
        console.log("=== Información global en los constructores===")
        //  https:developer.mozilla.org/es/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

        console.log("")
        console.log("=== Sin herencia múltiple===")
        //  https:developer.mozilla.org/es/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
    }
}

