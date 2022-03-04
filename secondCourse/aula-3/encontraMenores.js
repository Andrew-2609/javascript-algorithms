const listaLivros = require('../aula-2/array');

function encontrarMenores(pivo, array) {
    let menores = 0;

    for (let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];
        if (produtoAtual.preco < pivo.preco) {
            menores++;
        }
    }

    trocarLugar(array, array.indexOf(pivo), menores);

    return array;
}

function trocarLugar(array, de, para) {
    const primeiroElemento = array[de];
    const segundoElemento = array[para];

    array[para] = primeiroElemento;
    array[de] = segundoElemento;
}

console.log(encontrarMenores(listaLivros[2], listaLivros));