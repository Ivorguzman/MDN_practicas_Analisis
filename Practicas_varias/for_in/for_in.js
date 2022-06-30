{
    const object = { a: 1, b: 2, c: 3 };
    for (const property in object) {
        // console.log(`${property}: ${object[property]}`);
        // console.log(property);
        // console.log(object);
        console.log(object[property]);
    }
}

{
    var triangle = { a: 1, b: 2, c: 3 };

    function ColoredTriangle() {
        this.color = 'red';
    }

    ColoredTriangle.prototype = triangle;

    var obj = new ColoredTriangle();
    console.log(obj);
    for (const prop in obj) {

        if (obj.hasOwnProperty(prop)) {
            console.log(`obj.${prop} = ${obj[prop]}`);
        }
    }


}