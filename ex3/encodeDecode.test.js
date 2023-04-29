const {encode, decode} = require('./encodeDecode');

describe('Testando funções Encode e Decode', () => {
  it('Testando se encode e decode são funções', () => {
    expect(typeof decode).toBe('function');
    expect(typeof encode).toBe('function');
  });

  it('Testando conversão estrita das vogais', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });

  it('Testando tamanho da string retornada', () => {
    expect(encode('a, e, i, o, u').length).toBe(13);
    expect(decode('1, 2, 3, 4, 5').length).toBe(13);
  });

  it('Testando a conversão das vogais individualmente', () => {
    expect(encode('alma')).toBe('1lm1');
    expect(encode('emet')).toBe('2m2t');
    expect(encode('imir')).toBe('3m3r');
    expect(encode('ovo')).toBe('4v4');
    expect(encode('urubu')).toBe('5r5b5');
    expect(decode('1lm1')).toBe('alma');
    expect(decode('2m2t')).toBe('emet');
    expect(decode('3m3r')).toBe('imir');
    expect(decode('4v4')).toBe('ovo');
    expect(decode('5r5b5')).toBe('urubu');
  });
});