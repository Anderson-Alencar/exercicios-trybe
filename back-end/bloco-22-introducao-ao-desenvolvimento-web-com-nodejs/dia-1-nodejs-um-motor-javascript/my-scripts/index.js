const readline = require('readline-sync');

const apps = [
  {name: 'Calcule o imc', app: './imc.js'},
  {name: 'Adivinhe o número', app: './sorteio.js'},
  {name: 'Calcule a velocidade média', app: './velocidade.js'},
];

let message = apps.map((option, i) => console.log(`${i + 1}. ${option.name}`));

message.unshift('Escolha uma alternativa');
message = message.join('\n');

const choice = readline.questionInt(message) - 1;

const script = apps[choice];

require(script.app);