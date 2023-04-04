function arrayOfNumbers(vector) {
    let evenNumbers = [];
    let oddNumbers = [];
    for (i = 0; i < vector.length; i += 1) {
        let vectorArray = vector[i];
        for (x = 0; x < vectorArray.length; x += 1){
            if (vectorArray[x] % 2 === 0){
                evenNumbers.push(vectorArray[x]);
            } else {
                oddNumbers.push(vectorArray[x]);
            }
        }
    }
    return evenNumbers;
}

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];
console.log(arrayOfNumbers(vector));