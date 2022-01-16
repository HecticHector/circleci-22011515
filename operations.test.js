const addSum = require('./operations');

// ES6 arrow form.
test('adds 1 + 2 to equal 3', () => {
  expect(addSum(1, 2)).toBe(3);
});

// same as previous decoupled with function outside.
test('adds 2 + 3 to equal 5', addSumTest);

function addSumTest() {
  expect(addSum(2, 3)).toBe(5);
}
