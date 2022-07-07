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

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toBeGreaterThan(expected) {},
    toBeLessThan(expected) {},
    toBeTruthy() {},
    toBeFalsy() {},
  }
}

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.log(error);
  }
}
