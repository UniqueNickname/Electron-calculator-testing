const calc_combination = require('../Logic/combination');

test('combinations of 5 to 4 to equal 70', () => {
  expect(calc_combination(5, 4)).toBe(70);
});