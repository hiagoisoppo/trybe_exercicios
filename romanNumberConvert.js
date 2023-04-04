var romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

let nowRoman = 0;
let result = 0;

function romanNumberConvert(string) {
    let array = string.toUpperCase().split('');

    for (i = array.length; i >= 0; i -= 1) {
        for (let x in romanNumbers) {
            if (array[i] === x) {
                romanCalc(romanNumbers[x]);
            }
        }
    }
    return result;
}

function romanCalc(number) {
    if (nowRoman <= number) {
        result += number;
    } else {
        result -= number;
    }

    nowRoman = number;
}

console.log(romanNumberConvert('MMMMCMXCIX'));