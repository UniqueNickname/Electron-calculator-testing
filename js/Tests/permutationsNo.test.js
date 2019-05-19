const calc_permutationsNo = require('../Logic/permutationsNo');

test('permutations no repeat of 5 to 4 to equal 120', () => {
  expect(calc_permutationsNo(5, 4)).toBe(120);
});

test('permutations no repeat of 12 to 3 to equal 1320', () => {
    expect(calc_permutationsNo(12, 3)).toBe(1320);
});