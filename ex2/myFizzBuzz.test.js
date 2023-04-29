const myFizzBuzz = require('./myFizzBuzz');

describe('Teste da Função myFizzBuzz', () => {
  it('Testando os retornos corretos', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(20)).toBe('buzz');
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('Pedro')).toBe(false);
  })
});