import { screen, render } from "@testing-library/react";

import SideBar from "./SideBar";

const items = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
]

test('should renders some links', () => {
  // Arrange
  render(<SideBar items={items} />)

  // Act
  const anchorElements = screen.getAllByRole('navigation')

  // Assert
  expect(anchorElements.length).toBe(items.length)
  expect(anchorElements[0]).toHaveAttribute('href', items[0].href)
  expect(anchorElements[0]).toHaveTextContent(items[0].title)
})
