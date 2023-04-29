// sum.test.js
const {sum} = require('./sum');
const {jim} = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});

test('jim two values', () => {
  expect(sum(3, 3)).toBe(6);
});