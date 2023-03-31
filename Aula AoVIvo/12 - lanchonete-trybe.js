function menuTrybe(pedido) {
  switch (pedido) {
    case 1:
      console.log("Você escolheu: Trybe Lanche Feliz");
      break;
    case 2:
      console.log("Você escolheu: McTrybe");
      break;
    case 3:
      console.log("Você escolheu: TrybeWooper");
      break;
    case 4:
      console.log("Você escolheu: X-Trybe");
      break;
    case 5:
      console.log("Você escolheu: Triplo Trybe com JS");
      break;
    default:
      console.log("Não temos está opção ainda :C");
  }
}

menuTrybe(4);
