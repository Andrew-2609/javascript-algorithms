const listaLivros = require('./arrayOrdenado');

function buscar(array, de, ate, valorBuscado) {
    if (de > ate) {
        return -1;
    }

    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return buscar(array, de, meio - 1, valorBuscado);
    }

    if (valorBuscado > atual.preco) {
        return buscar(array, meio + 1, ate, valorBuscado);
    }
}

console.log(buscar(listaLivros, 0, listaLivros.length - 1, 40));
console.log(buscar(listaLivros, 0, listaLivros.length - 1, 60)); // valor maior que todos no array
console.log(buscar(listaLivros, 0, listaLivros.length - 1, 1)); // valor menor que todos no array
console.log(buscar(listaLivros, 0, listaLivros.length - 1, 37)); // valor inexistente no meio do array