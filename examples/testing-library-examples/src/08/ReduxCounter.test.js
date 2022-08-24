import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Provider } from "react-redux";

import { ReduxCounter } from "./ReduxCounter";
import { createStore } from "./store";

describe('Redux Counter', () => {
  test("should increment", () => {
    render(
      <Provider store={createStore()}>
        <ReduxCounter />
      </Provider>
    );

    const counter = screen.getByRole("contentinfo");
    expect(counter).toHaveTextContent("0");

    const addButton = screen.getByText(/Increment/i);
    userEvent.click(addButton);

    expect(counter).toHaveTextContent("1");
  });

  test("should increment again", () => {
    render(
      <Provider store={createStore()}>
        <ReduxCounter />
      </Provider>
    );

    const counter = screen.getByRole("contentinfo");
    expect(counter).toHaveTextContent("0");

    const addButton = screen.getByText(/Increment/i);
    userEvent.click(addButton);

    expect(counter).toHaveTextContent("1");
  });
})
