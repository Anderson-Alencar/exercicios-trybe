const promise = new Promise((resolve, reject) => {
  const arr = [];

  for (let i = 0; i < 10; i += 1){
    const number = Math.floor(Math.random() * 51);
    arr.push(number);
  }

  const quadrado = arr.map(number => number * number);
  const soma = quadrado.reduce((acc, curr) => acc + curr);

  if (soma < 8000) {
    resolve(soma);
  }
  return reject();
})
.then((soma) => console.log(`Promise resolvida, soma: ${soma}`))
.catch(() => console.log('Promise rejeitada'));