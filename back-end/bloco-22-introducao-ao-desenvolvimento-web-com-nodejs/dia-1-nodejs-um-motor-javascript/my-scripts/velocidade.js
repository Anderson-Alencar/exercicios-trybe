const readline = require('readline-sync');

const distance = readline.questionInt('Qual a distância percorrida em metros? ');
const time = readline.questionInt('Em quanto tempo? (segundos) ');

console.log(`A velocidade média do carro é: ${distance / time} m/s`);