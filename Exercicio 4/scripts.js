let currentHour = 16;
let msg = '';

if(currentHour >= 22 && currentHour <=24){
    console.log('Não deveríamos comer nada, é hora de dormir');

} else if(currentHour >= 18 && currentHour < 22){
    console.log('Rango da noite, vamos jantar :D');

} else if(currentHour >= 11 && currentHour < 18){
    console.log('Vamos fazer um bolo pro café da tarde?');

} else if(currentHour >= 0 && currentHour < 11){
    console.log('Hmmm, cheiro de café recém-passado');

} else {
    console.log('Esse não é um valor válido')
}