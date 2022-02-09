const onlyNumbers = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject(new Error('Informe apenas números'))
    }

    const calculation = (num1 + num2) * num3

    calculation < 50 ? reject(new Error('Valor muito baixo')) : resolve(calculation);
  });

  return promise;
}

const generatorNumbers = () => {
  const numbers = [];
  
  for (let i = 0; i <= 2; i += 1) {
    numbers.push(Math.floor(Math.random() * 100 + 1));    
  }
  
  onlyNumbers(numbers[0], numbers[1], numbers[2])
    .then((response) => console.log(response))
    .catch((err) => console.log(err.message));
}

generatorNumbers();