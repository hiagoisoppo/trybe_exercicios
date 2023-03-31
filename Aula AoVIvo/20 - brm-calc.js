function brmCalc(idade, sexo, peso, altura) {
  if (sexo === "M") {
    console.log(altura * 6.25 + peso * 9.99 + idade * 4.92 + 5);
  } else if (sexo === "F") {
    console.log(altura * 6.25 + peso * 9.99 + idade * 4.92 - 161);
  } else {
    console.log("Sexo inválido.");
  }
}

brmCalc(25, 'M', 110, 180)