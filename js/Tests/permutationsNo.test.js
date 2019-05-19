const calc_permutationsNo = require('../Logic/permutationsNo');

test('СсП: при вводе текста должен вернуть error', () => {
  expect(calc_permutationsNo("пр2", 3)).toBe("введите числа больше 0");
});

test('СсП: при вводе не целого числа должен вернуть error', () => {
  expect(calc_permutationsNo(4.54, 3)).toBe("введите целые числа");
});

test('СсП: при вводе отрицательного числа должен вернуть error', () => {
  expect(calc_permutationsNo(9, -45)).toBe("введите числа больше 0");
});

test('СсП: при вводе n < k должен вернуть error', () => {
  expect(calc_permutationsNo(7, 14)).toBe("n должен быть больше или равен k");
});

test('СсП: при вводе 45, 11 должен вернуть 405179306820288000', () => {
  expect(calc_permutationsNo(45, 11)).toBe(405179306820288000);
});

test('СсП: при вводе 5, 4 должен вернуть 120', () => {
  expect(calc_permutationsNo(5, 4)).toBe(120);
});

test('СсП: при вводе 12, 3 должен вернуть 1320,', () => {
    expect(calc_permutationsNo(12, 3)).toBe(1320);
});