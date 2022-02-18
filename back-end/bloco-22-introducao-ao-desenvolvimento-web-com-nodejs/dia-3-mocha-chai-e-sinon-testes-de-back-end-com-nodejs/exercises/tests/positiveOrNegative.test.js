// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
const { expect } = require('chain');

const number = require('./number.js');

describe('Testa se quando o número é maior que 0', () => {
  it('É um número', () => {
    expect(number(3)).to.be.a('number');
  });
  
  it('Retorna positivo', () => {
    expect(number(3)).to.be.equal('positivo')
  });
});

describe('Testa se quando o número é menor que 0', () => {
  it('É um número', () => {
    expect(number(-5)).to.be.a('number');
  });
  
  it('Retorna negativo', () => {
    expect(number(-5)).to.be.equal('negativo');
  });
});

describe('Testa se quando o número é igual a 0', () => {
  it('É um número', () => {
    expect(number(0)).to.be.a('number');
  });
  
  it('Retorna neutro', () => {
    expect(number(0)).to.be.equal('neutro');
  });
});