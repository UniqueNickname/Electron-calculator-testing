const calc_permutations = require('../Logic/permutations');

test('permutations of 5 to 4 to equal 625', () => {
  expect(calc_permutations(5, 4)).toBe(625);
});