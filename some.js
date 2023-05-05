const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];
console.log(pessoas.some((pessoa) => pessoa.cargo === 'Gerência'));
console.log(pessoas.some((pessoa) => pessoa.cargo === 'Product Owner'));
//////////////////////////////////////////////////////////////////////////////////////////////
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);
console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false
/////////////////////////////////////////////////////////////////////////////////////////////
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const hasName = (arr, name) => {
  return arr.some((arrName) => arrName === name);
};
console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));