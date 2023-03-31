function avaliacaoProjeto(periodo, nota) {
  if (periodo === true && nota >= 80) {
    return "Parabéns, você está aprovado(a)!";
  } else if (periodo === true && nota < 80) {
    return "Você ainda precisa entregar mais requisitos!";
  } else if (periodo === false && nota >= 90) {
    return "Parabéns, você está aprovado(a)!";
  } else if (periodo === false && nota < 90) {
    return "Você ainda precisa entregar mais requisitos!";
  }
}

console.log(avaliacaoProjeto(false, 10));