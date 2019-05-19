const calc_combinationNo = require('../Logic/combinationNo');

test('combinations no repeat of 12 to 4 to equal 495', () => {
  expect(calc_combinationNo(12, 4)).toBe(495);
});