const { sum, substract } = require('./math');

test('sum adds numbers', () => {
  // Arrange
  const expected = 10;

  // Act
  const result = sum(3, 7);

  // Assert
  expect(result).toBe(expected);
});

test('substract substracts numbers', () => {
  // Arrange
  const expected = 4;

  // Act
  const result = substract(7, 3);

  // Assert
  expect(result).toBe(expected);
});
