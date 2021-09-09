const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const merge = names.reduce((acc, name) => `${acc} ${name}`).toLowerCase().split('');
  let a = 0;
  merge.map(char => {
    if (char === 'a') a += 1;
  });
  return a;
}

assert.deepStrictEqual(containsA(), 20);
