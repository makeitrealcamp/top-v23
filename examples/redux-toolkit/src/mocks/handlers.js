import { rest } from "msw";

const checkoutError = rest.post("/checkout-error", (req, res, ctx) => {
  return res(ctx.json({ "success": false, "error": "Cart must not be empty" }));
});

const checkoutSuccess = rest.post("/checkout-success", (req, res, ctx) => {
  return res(ctx.json({ "success": true }));
});

//it returns array of request handlers
export const handlers = [checkoutError, checkoutSuccess];
