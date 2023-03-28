let nota1 = 3;
let nota2 = 3;
let nota3 = 2;
let nota4 = 3;
let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
    console.log('Parabens você foi Aprovado, sua média foi de ' + media)
} else if (media < 7 && media >= 3) {
    console.log('Infelizmente você está em Recuperação, sua média foi de ' + media)
} else {
    console.log('Infelizmente você foi Reprovado, sua média foi de '  + media)
}