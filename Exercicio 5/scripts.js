// let weekDay = 'domingo';
// let workDays = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira']

// for (let i = 0; i < workDays.length; i += 1) {
//     if (weekDay === workDays[i] ){
//             console.log('Oba, mais um dia de aprendizado na Trybe >:D')
//     }
// }

// if (weekDay === 'sabado' || weekDay === 'domingo'){
//     console.log('FINALMENTE, descanso merecido! UwU!')
// }

function dayTest(todayIs) {
    let workDays = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira']

    for (let i = 0; i < workDays.length; i += 1) {
        if (todayIs === workDays[i] ){
                console.log('Oba, mais um dia de aprendizado na Trybe >:D')
        }
    }
    
    if (todayIs === 'sabado' || todayIs === 'domingo'){
        console.log('FINALMENTE, descanso merecido! UwU!')
    }
}

dayTest('terça-feira');