const factorial = require('../Logic/factorial');

test('factorial 5 to equal 120', () => {
  expect(factorial(5)).toBe(120);
});