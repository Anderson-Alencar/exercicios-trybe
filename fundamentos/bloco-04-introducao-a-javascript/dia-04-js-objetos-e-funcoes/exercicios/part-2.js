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