const math = require("./math");

test('Teste da função subtrair', () => {
  math.subtrair = jest.fn();

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});


