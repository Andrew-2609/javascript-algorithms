const livros = require('./listaLivros');
const alternarPosicao = require('./alternarPosicao');

function insertionSort(lista) {
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;

        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            alternarPosicao(lista, analise);
            analise--;
        }
    }

    return lista;
}

let sortedList = insertionSort(livros);
console.log(sortedList);