const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurn = (object, key, value) => object[key] = value;

addTurn(lesson2, 'turno', 'noite');

console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = object => Object.keys(object);

console.log(listKeys(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto.

const lengthObject = object => Object.keys(object).length;

console.log(lengthObject(lesson3));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = object => Object.values(object);

console.log(listValues(lesson1));

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = object => {
  let total = 0;
  let array = Object.keys(object);
  for (const i in array) {
    total += object[array[i]].numeroEstudantes;
  }
  return total;
}

console.log(totalStudents(allLessons));

// 7 .Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByNumber = (object, number) => Object.values(object)[number];

console.log(getValueByNumber(lesson1, 0));

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

// const verifyPair = (object, key, value) => {
//   if (Object.entries(object).includes(key, value)) {
//     return true;
//   }
// }

// console.log(verifyPair(lesson3, 'turno', 'noite'));

