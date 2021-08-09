let n = 7;
let triangulo = '';
let center = (n + 1) / 2;
let left = center;
let right = center;

for (let indexLine = 0; indexLine <= center; indexLine += 1){
  for (let indexColumn = 0; indexColumn <= n; indexColumn += 1) {
    if (indexColumn > left && indexColumn < right) {
      triangulo += '*';
    } else {
      triangulo += ' ';
    }
  }

  console.log(triangulo);
  triangulo = '';
  left -= 1;
  right += 1;
}