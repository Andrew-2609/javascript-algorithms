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

function dividirNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)];

    encontrarMenores(pivo, array);

    let valoresMenores = 0;

    for (let analisando = 0; analisando < array.length; analisando++) {
        let produtoAtual = array[analisando];
        if (produtoAtual.preco < pivo.preco && analisando !== pivo) {
            trocarLugar(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }

    return array;
}

// console.log(dividirNoPivo(listaLivros));

module.exports = trocarLugar