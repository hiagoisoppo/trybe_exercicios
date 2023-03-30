function chestMove(piece) {
  switch (piece) {
    case "rei":
      return "Pode mover-se em qualquer direção, porém apenas uma casa por vez";
      break;

    case "dama":
      return "Pode mover-se em qualquer direção, porém quantas casas quiser, desde que estejam livres.";
      break;

    case "torre":
      return "Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.";
      break;

    case "bispo":
      return "Move-se na diagonal, quantas casas quiser.";
      break;

    case "cavalo":
      return "É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”.";
      break;

    case "peao":
      return "Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.";
      break;

    default:
      return "Essa peça não existe, tente novamente.";
  }
}

console.log(chestMove("bispo"));
