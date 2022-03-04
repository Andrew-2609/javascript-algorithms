const listaLivros = require('../aula-2/array');

function encontrarMenores(pivo, array) {
    let menores = 0;

    for (let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];
        if (produtoAtual.preco < pivo.preco) {
            menores++;
        }
    }

    return menores;
}

console.log(encontrarMenores(listaLivros[2], listaLivros));