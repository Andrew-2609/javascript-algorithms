const livros = require('./listaLivros');

function insertionSort(lista) {
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;

        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];

            lista[analise - 1] = itemAnalise;
            lista[analise] = itemAnterior;

            analise--;
        }
    }

    return lista;
}

let sortedList = insertionSort(livros);
console.log(sortedList);