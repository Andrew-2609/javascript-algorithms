const listaLivros = require('../aula-2/array');
const trocarLugar = require('./encontraMenores');

function quickSort(array, esquerda, direita) {

    if (array.length > 1) {
        let indiceAtual = particionar(array, esquerda, direita);

        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1);
        }

        if (direita > indiceAtual) {
            quickSort(array, indiceAtual, direita);
        }
    }

    return array;
}

function particionar(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda; // 0
    let atualDireita = direita; // 10

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }

        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        }

        if (atualEsquerda <= atualDireita) {
            trocarLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }

    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));