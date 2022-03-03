const livros = require('./listaLivros');
const sorter = require('./menorEMaiorValor');

for (let atual = 0; atual < livros.length - 1; atual++) {
    let menor = sorter.menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log("Livro atual:", livroAtual);

    let livroMenorPreco = livros[menor];
    console.log("Livro com menor preço:", livroMenorPreco);

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);