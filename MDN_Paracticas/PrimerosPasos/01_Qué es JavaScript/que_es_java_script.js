//!  https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript

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



//!  Estrategias para la carga de scripts

//* <script src="script.js"  defer ></script> </script>

//* <script src=" script.js"  async ></script>



//* async y defer indican al navegador que descargue los scripts en un hilo separado, mientras que el resto de la página (el DOM, etc.) se descarga, por lo que los scripts no bloquean la carga de la página.

//* Si tus scripts se deben ejecutar inmediatamente y no tienen ninguna dependencia, utiliza ==> async.<==

//* Si tus scripts necesitan esperar a ser procesados y dependen de otros scripts y/o del DOM en su lugar, cárgalos usando ==>defery<== coloca tus elementos <script> correspondientes en el orden que desees que el navegador los ejecute.