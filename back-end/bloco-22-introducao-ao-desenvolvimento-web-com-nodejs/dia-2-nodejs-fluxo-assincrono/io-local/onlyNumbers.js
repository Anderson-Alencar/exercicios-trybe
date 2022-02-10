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

const generatorNumbers = async () => {
  const numbersRandom = [];
  
  for (let i = 0; i <= 2; i += 1) {
    numbersRandom.push(Math.floor(Math.random() * 100 + 1));    
  }

  try {
    const result = await onlyNumbers(...numbersRandom);
    console.log(result);
  } catch(err) {
    console.error(err);
  }
}

// const numbers = generatorNumbers();

//then - catch
// onlyNumbers(...numbers)
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err.message));


