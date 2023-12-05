import { getLista, limpaLista, adicionaNaLista, removeDaLista } from "./lista.js"

const olItens = document.querySelector("#itens")
const pEntrada = document.querySelector("#entrada")
const iSaida = document.querySelector("#saida")
const btnAdicionar = document.querySelector("#adicionar")
const btnLimpar = document.querySelector("#limpar")
const btnRemover = document.querySelector("#remover")

btnLimpar.addEventListener('click', limparItensDeLista)
btnAdicionar.addEventListener('click', adicionarItensDeLista)
btnRemover.addEventListener('click', removerItensDeLista)

atualizarLista()

function atualizarLista() {
    olItens.innerHTML = ""
    let lista = getLista()
    for(let i = 0; i < lista.length; i++) {
        const li = document.createElement("li")
        li.textContent = lista[i]
        olItens.appendChild(li)
    }
}

function limparItensDeLista() {
    limpaLista()
    atualizarLista()
}

function adicionarItensDeLista() {
    adicionaNaLista(pEntrada.textContent)
    pEntrada.textContent = ""
    atualizarLista()
}

function removerItensDeLista() {
    if(iSaida.value == '') {
        alert("Uma posição deve ser digitada.")
    }
    else {
        removeDaLista(Number(iSaida.value)-1)
        iSaida.value = ""
        atualizarLista()
    }
}