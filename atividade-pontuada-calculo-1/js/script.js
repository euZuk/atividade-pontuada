const preco = document.querySelector('#preco')
const quantidade = document.querySelector('#quantidade')
const desconto = document.querySelector('#desconto')
const btCalcular = document.querySelector('#bt-calcular')
const resultado = document.querySelector('#resultado')

btCalcular.addEventListener('click',calcular)

function calcular(){


const valor = Number(preco.value)
const qtd = Number(quantidade.value)
const desc = Number(desconto.value)

const total = valor * qtd
const descontoValor = total * desc / 100
const valorFinal = total - descontoValor

resultado.textContent = 'Valor final: R$ ' + valorFinal.toFixed(2)


}
