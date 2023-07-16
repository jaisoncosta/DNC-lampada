var lamp = window.document.getElementById('lampada')

function estaQuebrada() {
    return lamp.src.indexOf('quebrado') > -1
}

function Ligar(){
    if (!estaQuebrada()){
    lamp.src = 'img/ligado.svg'}
}

function Desligar() {
    if (!estaQuebrada()){
    lamp.src = 'img/desligado.svg'}
}

lamp.addEventListener ('click', quebrar)
function quebrar() {
    lamp.src = 'img/quebrado.svg'
}

