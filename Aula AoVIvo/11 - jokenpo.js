function jokenpo(jogador1, jogador2) {
  if (jogador1 === "tesoura" && jogador2 === "papel") {
    console.log("Tesoura corta Papel, jogador 1 venceu");
  } else if (jogador2 === "tesoura" && jogador1 === "papel") {
    console.log("Tesoura corta Papel, jogador 2 venceu");
  } else if (jogador1 === "papel" && jogador2 === "pedra") {
    console.log("Papel cobre Pedra, jogador 1 venceu");
  } else if (jogador2 === "papel" && jogador1 === "pedra") {
    console.log("Papel cobre Pedra, jogador 2 venceu");
  } else if (jogador1 === "pedra" && jogador2 === "tesoura") {
    console.log("Pedra quebra Tesoura, jogador 1 venceu");
  } else if (jogador2 === "pedra" && jogador1 === "tesoura") {
    console.log("Pedra quebra Tesoura, jogador 2 venceu");
  } else if (jogador1 === jogador2){
    console.log('Empate');
  } else {
    console.log('Jogada inexistente, tente novamente')
  }
}

jokenpo('tesoura','tesoura')