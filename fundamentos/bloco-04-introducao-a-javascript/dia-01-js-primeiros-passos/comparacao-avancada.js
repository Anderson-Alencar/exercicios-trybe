let valorUm = 4;
let valorDois = 8;
let valorTres = 12;

if (valorUm > valorDois && valorUm > valorTres) {
  console.log(valorUm);
} else if (valorDois > valorUm && valorDois > valorTres) {
  console.log(valorDois);
} else if (valorTres > valorUm && valorTres > valorDois) {
  console.log(valorTres);
} else {
  console.log('valores iguais');
}