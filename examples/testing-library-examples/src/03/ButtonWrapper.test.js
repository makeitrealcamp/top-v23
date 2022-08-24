import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import ButtonWrapper from "./ButtonWrapper";

test('should handle click', () => {
  // Arrange
  const handleClick = jest.fn();
  const title = 'Click me';
  render(<ButtonWrapper title={title} handleClick={handleClick} />)

  // Act
  const buttonElement = screen.getByRole('button');
  userEvent.click(buttonElement);

  // Assert
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(buttonElement).toHaveTextContent(title);
})
