const { test } = require('@jest/globals')
const service = require('./service');

test('should ', () => {
  service.numberRandom = jest.fn().mockReturnValue(10);
  service.numberRandom();
  expect(service.numberRandom).toHaveBeenCalled();

})


