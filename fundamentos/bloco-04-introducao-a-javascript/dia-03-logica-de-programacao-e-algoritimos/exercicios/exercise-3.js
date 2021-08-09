let n = 5;
let triangulo = '';
let inputPosition = n;

for (let index = 0; index < n; index += 1){
  for (let i = 0; i <= n; i += 1) {
    if (i < inputPosition) {
      triangulo += ' ';
    } else {
      triangulo += '*';
    }
  }
  // triangulo += '*';
  console.log(triangulo);
  triangulo = '';
  inputPosition -= 1;
}