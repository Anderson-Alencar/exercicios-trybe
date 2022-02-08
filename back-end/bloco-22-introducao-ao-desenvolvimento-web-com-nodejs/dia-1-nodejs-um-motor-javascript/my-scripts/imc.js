// Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
const readline = require('readline-sync');

const calculateImc = () => {
  const weight = readline.questionFloat('Informe o seu peso ');
  const height = readline.questionFloat('Informe a sua altura ');

  const computedImc = (weight / Math.pow(height, 2).toFixed(1));

  if(computedImc < 18.5) {
    console.log(`Seu IMC é: ${computedImc}. Situação: Abaixo do peso (magreza)`);
  }
  if(computedImc >= 18.5 && computedImc <= 24.9) {
    console.log(`Seu IMC é: ${computedImc}. Peso normal`);
  }
  if(computedImc >= 25 && computedImc <= 29.9) {
    console.log(`Seu IMC é: ${computedImc}. Situação: Acima do peso (sobrepeso)`);
  }
  if(computedImc >= 30 && computedImc <= 34.9) {
    console.log(`Seu IMC é: ${computedImc}. Situação: Obesidade grau I`);
  }
  if(computedImc >= 35 && computedImc <= 39.9) {
    console.log(`Seu IMC é: ${computedImc}. Situação: Obesidade grau II`);
  }
  if(computedImc >= 40) {
    console.log(`Seu IMC é: ${computedImc}. Situação: Obesidade graus III e IV`);
  }
} 

calculateImc();
