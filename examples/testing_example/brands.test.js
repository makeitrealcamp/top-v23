const { findOneByBrand, filterByBrand } = require('./brands');

describe('find by brand', () => {
  test('should return an undefined if no brand found', () => {
    // Arrange
    const expected = undefined;

    // Act
    const result = findOneByBrand('test');

    // Assert
    expect(result).toEqual(expected);
  })

  test('should return an object with the brand', () => {
    // Arrange
    const expected = { brand: 'Renault', price: 2395, model: 2012 };

    // Act
    const result = findOneByBrand('Renault');

    // Assert
    expect(result).toEqual(expected);
  })
})


describe('filter by brand', () => {

  test('should return an empty array if no brand found', () => {
    // Arrange
    const expected = [];

    // Act
    const result = filterByBrand('test');

    // Assert
    expect(result).toEqual(expected);
  })

  test('should return an array with the brand', () => {
    // Arrange
    const expectedLength = 1;

    // Act
    const result = filterByBrand('Renault');

    // Assert
    expect(result.length).toBeGreaterThanOrEqual(expectedLength);
  })
})
