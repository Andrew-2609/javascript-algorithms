const livros = require('./listaLivros');
const sorter = require('./menorEMaiorValor');

livros.forEach((_, index) => {
   let menor = sorter.menorValor(livros, index);

   let livroMenorPreco = livros[menor];
   let livroAtual = livros[index];

   livros[index] = livroMenorPreco;
   livros[menor] = livroAtual;
});

console.log(livros);