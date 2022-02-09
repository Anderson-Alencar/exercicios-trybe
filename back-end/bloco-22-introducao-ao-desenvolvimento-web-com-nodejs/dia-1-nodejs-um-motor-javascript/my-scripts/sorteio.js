const readline = require('readline-sync');

const bet = readline.questionInt('Escolha um número de 0 a 10 \n');

const random = Math.round(Math.random() * 10);

bet === random ? console.log('Parabéns, número correto!') 
  : console.log(`Opa, não foi dessa vez. O número era ${random}.`);