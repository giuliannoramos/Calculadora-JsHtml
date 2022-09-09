function Somar() {  
    
    let campoN1 = document.querySelector('#n1');
    let campoN2 = document.querySelector('#n2');
    let campoResultado = document.querySelector('resultado');

    campoResultado.innerHTML = parseInt(campoN1.value) + parseInt(campoN2.value)
}

function Subtrair() {
    
    let campoN1 = document.querySelector('#n1');
    let campoN2 = document.querySelector('#n2');
    let campoResultado = document.querySelector('resultado');

    campoResultado.innerHTML = parseInt(campoN1.value) - parseInt(campoN2.value)
}

function Multiplicar() {
    
    let campoN1 = document.querySelector('#n1');
    let campoN2 = document.querySelector('#n2');
    let campoResultado = document.querySelector('resultado');

    campoResultado.innerHTML = parseInt(campoN1.value) * parseInt(campoN2.value)
}

function Dividir() {   
    
    let campoN1 = document.querySelector('#n1');
    let campoN2 = document.querySelector('#n2');
    let campoResultado = document.querySelector('resultado');

    campoResultado.innerHTML = parseInt(campoN1.value) / parseInt(campoN2.value)
}