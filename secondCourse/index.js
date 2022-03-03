const {edGalho, edFolha} = require('./arrays');

function juntarListas(primeiraLista, segundaLista) {
    let listaFinal = [];
    let posicaoAtualPrimeiraLista = 0;
    let posicaoAtualSegundaLista = 0;
    let posicaoAtualListaFinal = 0;

    while (posicaoAtualPrimeiraLista < primeiraLista.length && posicaoAtualSegundaLista < segundaLista.length) {
        let produtoAtualPrimeiraLista = primeiraLista[posicaoAtualPrimeiraLista];
        let produtoAtualSegundaLista = segundaLista[posicaoAtualSegundaLista];

        if (produtoAtualPrimeiraLista.preco < produtoAtualSegundaLista.preco) {
            listaFinal[posicaoAtualListaFinal] = produtoAtualPrimeiraLista;
            posicaoAtualPrimeiraLista++;
        } else {
            listaFinal[posicaoAtualListaFinal] = produtoAtualSegundaLista;
            posicaoAtualSegundaLista++;
        }

        posicaoAtualListaFinal++;
    }

    return listaFinal;
}

console.log(juntarListas(edGalho, edFolha));