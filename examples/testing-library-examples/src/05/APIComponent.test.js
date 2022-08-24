import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";

import { APIComponent } from "./APIComponent";

// Configuracion de la herramienta para mockear las peticiones a la API
const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Jack" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets the data", async () => {
  render(<APIComponent />);

  const out = await screen.findByRole("contentinfo");

  expect(out).toHaveTextContent("Name is Jack");
});
