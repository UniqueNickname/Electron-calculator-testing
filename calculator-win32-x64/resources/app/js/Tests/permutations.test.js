const calc_permutations = require('../Logic/permutations');

test('РсП: при вводе текста должен вернуть error', () => {
  expect(calc_permutations("пр2", 3)).toBe("введите числа больше 0");
});

test('РсП: при вводе не целого числа должен вернуть error', () => {
  expect(calc_permutations(4.54, 3)).toBe("введите целые числа");
});

test('РсП: при вводе отрицательного числа должен вернуть error', () => {
  expect(calc_permutations(9, -45)).toBe("введите числа больше 0");
});

test('РсП: при вводе 13, 7 должен вернуть 62748517', () => {
  expect(calc_permutations(13, 7)).toBe(62748517);
});

test('РсП: при вводе 45, 11 должен вернуть 1532278301220703125', () => {
  expect(calc_permutations(45, 11)).toBe(1532278301220703125);
});

test('РсП: при вводе 5, 4 должен вернуть 625', () => {
  expect(calc_permutations(5, 4)).toBe(625);
});