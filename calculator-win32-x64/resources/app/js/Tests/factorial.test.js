const factorial = require('../Logic/factorial');

test('ПбП: при вводе не целого числа должен вернуть error', () => {
  expect(factorial(5.45)).toBe("введите целое число");
});

test('ПбП: при вводе текста должен вернуть error', () => {
  expect(factorial("gh")).toBe("введите число больше 0");
});

test('ПбП: при вводе отрицательного числа должен вернуть error', () => {
  expect(factorial(-7)).toBe("введите число больше 0");
});

test('ПбП: при вводе 5 должен вернуть 120', () => {
  expect(factorial(5)).toBe(120);
});

test('ПбП: при вводе 9 должен вернуть 362880', () => {
  expect(factorial(9)).toBe(362880);
});

test('ПбП: при вводе 12 должен вернуть 479001600', () => {
  expect(factorial(12)).toBe(479001600);
});