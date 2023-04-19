let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 0; i < numbers.length; i += 1) {
  for (x = i + 1; x < numbers.length; x += 1) {
    if (numbers[i] > numbers[x]) {
      let higherNumb = numbers[i];
      numbers[i] = numbers[x];
      numbers[x] = higherNumb;
    }
  }
}

console.log(numbers);


for (i = 0; i < numbers.length; i += 1) {
    for (x = i + 1; x < numbers.length; x += 1) {
      if (numbers[i] < numbers[x]) {
        let higherNumb = numbers[i];
        numbers[i] = numbers[x];
        numbers[x] = higherNumb;
      }
    }
  }
  
  console.log(numbers);