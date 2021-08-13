// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function palindromo(string) {
  for (let i in string) {
    if (string[i] == string[(string.length - 1) - i]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function findBigger(array) {
  let bigger = array[array.length - 1];
  let iBigger;

  for (let i = 0; i < array.length - 1; i += 1) { 
    if (array[i] > bigger) {
      bigger = array[i];
    } 
  }
  for (let i in array) {
    if (array[i] === bigger) {
      iBigger = i;
    }
  }
  return iBigger;

}
console.log(findBigger([2, 3, 6, 7, 10, 1]));
