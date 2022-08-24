import { render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'

import Person from './Person';

test('should renders a name', () => {
  // Arrange
  const expectedName = faker.name.fullName();
  render(<Person fullName={expectedName} />)

  // Act
  const divElement = screen.getByRole('contentinfo')

  // Assert
  expect(divElement).toBeInTheDocument()
  expect(divElement).toHaveTextContent(`Name is ${expectedName}`)
  expect(divElement).toHaveAttribute('role', 'contentinfo')
})
