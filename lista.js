const lista = ["Um", "Dois", "Três"]

export function getLista() {
    return structuredClone(lista)
}

export function limpaLista() {
    lista.splice(0)
}

export function adicionaNaLista(elemento) {
    lista.push(elemento)
}

export function removeDaLista(posicao) {
    lista.splice(Number(posicao), 1)
}