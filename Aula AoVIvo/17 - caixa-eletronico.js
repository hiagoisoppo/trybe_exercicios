function saqueNoCaixa(saldo, saque) {
  if (saque > saldo) {
    console.log("Saldo Insuficiente");
  } else if (saque <= saldo && saque > 0) {
    return confereNotas(saque, saldo);
  } else if (saque <= 0) {
    console.log("Valor de saque inválido");
  }
}

function confereNotas(saque, saldo) {
  let novoSaldo = saldo - saque;

  if (saque % 100 === 0 || saque % 50 === 0 || saque % 10 === 0) {
    console.log("Saque efetuado! Novo saldo: R$" + novoSaldo);
  } else {
    console.log("Valor inválido para as notas disponíveis: R$10, R$50, R$100");
  }
}
s
saqueNoCaixa(1000, 201);
