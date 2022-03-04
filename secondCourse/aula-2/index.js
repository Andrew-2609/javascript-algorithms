const listaLivros = require('./array');

function mergeSort(array) {
    if (array.length > 1) {
        const meioDoArray = Math.floor(array.length / 2);
        const primeiraParte = mergeSort(array.slice(0, meioDoArray));
        const segundaParte = mergeSort(array.slice(meioDoArray));

        array = ordenar(primeiraParte, segundaParte);
    }

    return array;
}

function ordenar(primeiraParte, segundaParte) {
    let posicaoAtualPrimeiraParte = 0;
    let posicaoAtualSegundaParte = 0;
    const resultado = [];

    while (posicaoAtualPrimeiraParte < primeiraParte.length && posicaoAtualSegundaParte < segundaParte.length) {
        let livroAtualPrimeiraParte = primeiraParte[posicaoAtualPrimeiraParte];
        let livroAtualSegundaParte = segundaParte[posicaoAtualSegundaParte];

        if (livroAtualPrimeiraParte.preco < livroAtualSegundaParte.preco) {
            resultado.push(livroAtualPrimeiraParte);
            posicaoAtualPrimeiraParte++;
        } else {
            resultado.push(livroAtualSegundaParte);
            posicaoAtualSegundaParte++;
        }
    }

    return resultado.concat(
        posicaoAtualPrimeiraParte < primeiraParte.length
            ? primeiraParte.slice(posicaoAtualPrimeiraParte)
            : segundaParte.slice(posicaoAtualSegundaParte)
    );
}

console.log(mergeSort(listaLivros));