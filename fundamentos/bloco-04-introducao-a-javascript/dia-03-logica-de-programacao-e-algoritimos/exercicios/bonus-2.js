// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

let number = 39;
let divisors = 0;

for (let i = 1; i <= number; i += 1) {
  if (number % i === 0) {
    divisors += 1;
  }
}

if (divisors === 2) {
  console.log('Número primo');
} else {
  console.log('Número não primo');
}