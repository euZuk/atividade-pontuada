const capa = document.querySelector('#capa')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')

bt1.addEventListener('click',esportivo)
bt2.addEventListener('click',suv)
bt3.addEventListener('click',hatch)
bt4.addEventListener('click',picape)

function esportivo(){
    capa.src = 'image/esportivo.jpg'
}

function suv(){
    capa.src = 'image/suv.jpg'
}

function hatch(){
    capa.src = 'image/hatch.avif'
}

function picape(){
    capa.src = 'image/picape.jpg'
}