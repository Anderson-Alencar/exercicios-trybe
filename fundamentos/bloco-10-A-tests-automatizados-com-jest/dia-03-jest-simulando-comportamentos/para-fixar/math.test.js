const math = require("./math");

// 1
// test('Teste da função subtrair', () => {
//   math.subtrair = jest.fn();

//   math.subtrair();
//   expect(math.subtrair).toHaveBeenCalled();
// });

// 2
test('Teste da função multiplicar com retorno padrão', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});

// 3
test('Teste da função somar', () => {
  math.somar = jest.fn().mockReturnValue(7);

  expect(math.somar(3, 4)).toBe(7);
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledWith(3, 4);
});

// 4
test('Teste da função dividir com retorno padrão', () => {
  const mockDividir = jest.spyOn(math, 'dividir');
  mockDividir.mockReturnValue(15);
  mockDividir.mockReturnValueOnce(2);
  mockDividir.mockReturnValueOnce(5);

  expect(mockDividir(4, 2)).toBe(2);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledWith(4, 2);
  expect(mockDividir).toHaveBeenCalledTimes(1);

  expect(mockDividir(45, 9)).toBe(5);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledWith(45, 9);
  expect(mockDividir).toHaveBeenCalledTimes(2);
  
  expect(mockDividir()).toBe(15);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(3);

});

// 5
test('Teste da função subtrair com retorno padrão', () => {
  const mockSub = jest.spyOn(math, 'subtrair');
  mockSub.mockReturnValue(20);

  expect(mockSub()).toBe(20);
  expect(mockSub).toHaveBeenCalledTimes(1);

});
