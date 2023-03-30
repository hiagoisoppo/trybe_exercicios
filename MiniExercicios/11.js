function descontoINSS(salario) {
  if (salario <= 1556.94) {
    return salario * 0.08;

  } else if (salario >= 1556.95 && salario <= 2594.92) {
    return salario * 0.09;

  } else if (salario >= 2594.93 && salario <= 5189.82) {
    return salario * 0.11;

  } else if (salario >= 5189.83) {
    return 570.88;
  }
}

function descontoIR(salario, inss) {
    let salarioBase = salario - inss;

    if (salarioBase <= 1903.98) {
      return salarioBase - 0;

    } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        aliquotaIR = salarioBase * 0.075;
        parcelaIR = 142.80;
        return salarioBase - (aliquotaIR - parcelaIR);

    } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        aliquotaIR = salarioBase * 0.15;
        parcelaIR = 354.80;
        return salarioBase - (aliquotaIR - parcelaIR);

    } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        aliquotaIR = salarioBase * 0.225;
        parcelaIR = 636.13;
        return salarioBase - (aliquotaIR - parcelaIR);

    } else if (salarioBase >= 4664.69) {
        aliquotaIR = salarioBase * 0.275;
        parcelaIR = 869.36;
        return salarioBase - (aliquotaIR - parcelaIR);
  }
}

  function salarioLiquido(salario){
    return descontoIR(salario, descontoINSS(salario));
    
  }


 console.log(salarioLiquido(1683));