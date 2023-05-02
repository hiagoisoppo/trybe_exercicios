const isEmpty = (name, age) => {
  if (name === undefined || age === undefined) {
    throw new Error('Todas as informações são necessárias');
  }
};

const isLegalAge = (age) => {
  if (age < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  }
};

const studentRegister = (name, age) => {
  try {
    isEmpty(name, age);
    isLegalAge(age);
    return `${name}, seja bem-vindo(a) à AuTrybe!`;
  } catch (error) {
    return error.message
  }
}

console.log(studentRegister('Hiago Isoppo', 25));
console.log(studentRegister('Arthur Felisberto', 1));
console.log(studentRegister('Jaine Fidelis'));