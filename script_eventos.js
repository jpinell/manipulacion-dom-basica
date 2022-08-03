const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//Escuchador de eventos
btn.addEventListener('click', btnOnClick);

function btnOnClick() {

    const respuesta = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = `El total es ${respuesta}`;
}
