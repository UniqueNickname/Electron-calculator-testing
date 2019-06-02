const calc_combination = require('../Logic/combination');

test('КсП: при вводе текста должен вернуть error', () => {
  expect(calc_combination("пр2", 3)).toBe("введите числа больше 0");
});

test('КсП: при вводе не целого числа должен вернуть error', () => {
  expect(calc_combination(4.54, 3)).toBe("введите целые числа");
});

test('КсП: при вводе отрицательного числа должен вернуть error', () => {
  expect(calc_combination(9, -45)).toBe("введите числа больше 0");
});

test('КсП: при вводе n < k должен вернуть error', () => {
  expect(calc_combination(7, 14)).toBe("n должен быть больше или равен k");
});

test('КсП: при вводе 12, 4 должен вернуть 1365', () => {
  expect(calc_combination(12, 4)).toBe(1365);
});

test('КсП: при вводе 45, 11 должен вернуть 119653565850', () => {
  expect(calc_combination(45, 11)).toBe(119653565850);
});

test('КсП: при вводе 5, 4 должен вернуть 70', () => {
  expect(calc_combination(5, 4)).toBe(70);
});