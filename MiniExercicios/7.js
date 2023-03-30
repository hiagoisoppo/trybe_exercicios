function converteNota(nota){
    if(nota >= 93 && nota <= 100){
        return 'A';
    } else if(nota >= 90 && nota < 93){
        return 'A-';
        
    } else if(nota >= 87 && nota < 90){
        return 'B+';

    } else if(nota >= 83 && nota < 87){
        return 'B';

    } else if(nota >= 80 && nota < 83){
        return 'B-';

    } else if(nota >= 77 && nota < 80){
        return 'C+';

    } else if(nota >= 73  && nota < 77){
        return 'C';

    } else if(nota >= 70 && nota < 73){
        return 'C-';

    } else if(nota >= 67 && nota < 70){
        return 'D+';

    } else if(nota >= 63 && nota < 67){
        return 'D';

    } else if(nota >= 60 && nota < 63){
        return 'D-';

    } else if(nota > 0  && nota < 60){
        return 'F';

    } else {
        return 'Essa nota não existe'
    }
}

console.log(converteNota(97.3));
console.log(converteNota(91));
console.log(converteNota(88));
console.log(converteNota(85));
console.log(converteNota(81));
console.log(converteNota(78));
console.log(converteNota(75));
console.log(converteNota(71));
console.log(converteNota(68));
console.log(converteNota(65));
console.log(converteNota(61));
console.log(converteNota(3));