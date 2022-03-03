function alternarPosicao(lista, analise) {
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise - 1];

    lista[analise - 1] = itemAnalise;
    lista[analise] = itemAnterior;
}

module.exports = alternarPosicao;