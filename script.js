// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura
let objeto = {
  area: 0,
  perimetro: 0,
};

function calculaAreaEPerimetro(base, altura) {
  return {
    area: base * altura,
    perimetro: 2 * base + 2 * altura,
  };
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercício 2 - Crie uma função que, dado um array de números inteiros,
// retorne a quantidade de números pares e ímpares no formato:
function quantidadeParImpar(array) {
  let numeros = {
    pares: 0,
    impares: 0,
  };
  for (n of array) {
    if (n % 2 === 0) {
      numeros.pares += 1;
    } else {
      numeros.impares += 1;
    }
  }
  return numeros;
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.
// Dica: Use o split.
function verificaFimPalavra(word1, word2) {
  return word1.endsWith(word2);
};
// valor de teste: ‘trybe’ e ‘be’
// valor esperado no retorno da função: true
// verificaFimPalavra(‘trybe’, ‘be’);
// Retorno esperado: true
// verificaFimPalavra(‘joaofernando’, ‘fernan’);
// Retorno esperado: false;
