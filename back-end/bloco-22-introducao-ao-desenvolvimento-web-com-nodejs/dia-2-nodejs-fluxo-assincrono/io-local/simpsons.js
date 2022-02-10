const fs = require('fs').promises;

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
const printSimpsons = () => {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((data) => JSON.parse(data))
    .then((response) => response.map(({id, name}) => `${id} - ${name}`))
    .then((persons) => persons.forEach((person) => console.log(person)));
}

printSimpsons();

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
const getSimpsonById = async (searchId) => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((data) => JSON.parse(data));

  const chosenSimpson = simpsons.find(({ id }) => searchId === id);

  // console.log(chosenSimpson)
  if(!chosenSimpson) {
    throw new Error('id não encontrado'); 
  } 
  
  return chosenSimpson;      
}

getSimpsonById('2');


