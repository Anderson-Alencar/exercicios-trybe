let productCost = 20;
let saleValue = 36;

let costMoreTaxes = productCost + productCost*0.2;

let profit = saleValue - costMoreTaxes;

if (productCost >= 0 && saleValue >= 0) {
  console.log('Ao vender 1000 produtos teremos o lucro de: R$', profit*1000, ',00');
} else {
  console.log('Valores inválidos');
}