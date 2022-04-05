function createParagraoh() {
    let para = document.createElement('p');//?
    para.textContent = 'Tu clckiaste el boton';
    console.log(para)
    document.body.appendChild(para);
}
const buttons = document.querySelectorAll('button');//?

for(let i=0; i< buttons.length; i++){
    buttons[i].addEventListener('click',createParagraoh) 
}
