let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let key1 in names) {
  console.log('Olá ' + names[key1]);
}

// item 2

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key2 in car) {
  console.log(key2, car[key2]);
}