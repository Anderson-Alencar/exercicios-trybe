// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maçã', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Leite em pó', 'Cereal'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));