import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Counter from "./Counter";

test('should handle click', () => {
  // Arrange
  render(<Counter  />)

  // Act
  const buttonElement = screen.getByText(/add one/i);
  const parragraphElement = screen.getByRole('contentinfo');
  userEvent.click(buttonElement);

  // Assert
  expect(parragraphElement).toHaveTextContent('You clicked 1 time');

  userEvent.click(buttonElement);
  expect(parragraphElement).toHaveTextContent('You clicked 2 time');
})
