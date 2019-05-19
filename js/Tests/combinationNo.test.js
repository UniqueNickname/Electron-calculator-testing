const calc_combinationNo = require('../Logic/combinationNo');

test('СбП: при вводе текста должен вернуть error', () => {
  expect(calc_combinationNo("пр2", 3)).toBe("введите числа больше 0");
});

test('СбП: при вводе отрицательного числа должен вернуть error', () => {
  expect(calc_combinationNo(9, -45)).toBe("введите числа больше 0");
});

test('СбП: при вводе n < k должен вернуть error', () => {
  expect(calc_combinationNo(7, 14)).toBe("n должен быть больше или равен k");
});

test('СбП: при вводе 12, 4 должен вернуть 495', () => {
  expect(calc_combinationNo(12, 4)).toBe(495);
});

test('СбП: при вводе 45, 11 должен вернуть 10150595910', () => {
  expect(calc_combinationNo(45, 11)).toBe(10150595910);
});