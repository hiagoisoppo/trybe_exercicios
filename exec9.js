let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (numb of numbers){
    console.log(numb);
}

let soma = 0;

for (i = 0; i < numbers.length; i += 1){
    soma += numbers[i];
}

let media = 'Média de: ' + (soma / numbers.length);

console.log(media);

if (media > 20){
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

////////////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 130, 175];

let higherNumber = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > higherNumber) {
    higherNumber = numbers[i];
  }
}

console.log(higherNumber);

/////////////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [2, 4, 6, 8, 10];
let oddNumbers = 0;

for(i = 0; i < numbers.length; i += 1){
    if (numbers[i] % 2 !== 0){
        oddNumbers += 1;
    }
}

if(oddNumbers === 0){
    console.log('Nenhum valor ímpar encontrado');
} else {
    console.log(oddNumbers)
}



/////////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [5, 9, 3, 19, 70, 8, 100, 35, 27, 130, 175];

let lowerNumber = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < lowerNumber) {
    lowerNumber = numbers[i];
  }
}

console.log(lowerNumber);