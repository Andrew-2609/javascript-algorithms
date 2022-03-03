function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }

    return maisBarato;
}

function maiorValor(arrProdutos, posicaoInicial) {
    let maisCaro = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco > arrProdutos[maisCaro].preco) {
            maisCaro = atual;
        }
    }

    return maisCaro;
}

module.exports.menorValor = menorValor
module.exports.maiorValor = maiorValor