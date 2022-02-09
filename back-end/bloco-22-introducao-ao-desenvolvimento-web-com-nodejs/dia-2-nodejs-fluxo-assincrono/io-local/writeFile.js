const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu textão')
  .then(() => console.log('Arquivo alterado com sucesso!'))
  .catch((err) => console.error(`Erro ao escrever o arquivo. ${err.message}`));