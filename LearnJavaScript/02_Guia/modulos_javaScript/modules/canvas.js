/*  contiene funciones relacionadas con la configuración del lienzo  */
const d = document;

function create(id, parent, width, height) {

    let divWrapper = d.createElement('div');
    let canvasElem = d.createElement('canvas');

    parent.appendChild(divWrapper);
    divWrapper.appendChild(canvasElem);
    divWrapper.id = id;
    canvasElem.width = width;
    canvasElem.height = height;

    let ctx = canvasElem.getContext('2d');

    console.log(divWrapper);
    console.log(canvasElem);
    console.log(parent);
    console.log(padivWrapperrent);
    console.log(id);
    console.log(ctx);

    return {
        ctx: ctx,
        id: id
    };

};

function createReportList(wrapperId) {
    let list = d.createElement('ul');
    list.id = wrapperId + '-reporter';
    let canvasWrapper = d.getElementById(wrapperId);
    canvasWrapper.appendChild(list);
    console.log(list);
    console.log(canvasWrapper);

    return list.id;
}
export{create,createReportList}
