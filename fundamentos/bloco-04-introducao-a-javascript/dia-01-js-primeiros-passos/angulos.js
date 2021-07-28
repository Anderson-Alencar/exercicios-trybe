let angUm = 60;
let angDois = 60;
let angTres = 60;

let somaDosAngulos = angUm + angDois + angTres;

let angulosPositivos = angUm > 0 && angDois > 0 && angTres > 0;

if (angulosPositivos) {
  if (somaDosAngulos == 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Fatal error');
}