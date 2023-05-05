const numbers = [19, 21, 30, 3, 45, 22, 15];
//metodo 1
console.log(numbers.find((number) => {
  return number % 5 === 0 && number % 3 === 0
} ));
//metodo 2
console.log(numbers.find((number) => number % 5 === 0 && number % 3 === 0));


const names = ['João', 'Irene', 'Fernando', 'Maria'];
//metodo 1
console.log(names.find((name) => name.length === 5));
//metodo 2
console.log(names.find((name) => {
  return name.length === 5 
}));


const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];
//metodo 1
console.log(musicas.find((musicObject) => musicObject.id === '31031685'));
//metodo 2
console.log(musicas.find((musicObject) => {
  return musicObject.id === '31031685';
}));