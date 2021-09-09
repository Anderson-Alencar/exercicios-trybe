const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// EXERCICIO 2 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenaNumeros = array => {
  const ordemCrescente = array.sort((a, b) => a - b);
  return ordemCrescente;
}

console.log(ordenaNumeros(oddsAndEvens)); // será necessário alterar essa linha 😉