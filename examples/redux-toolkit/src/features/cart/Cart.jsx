import classNames from "classnames";

import { useAppSelector, useAppDispatch } from "../../hooks/store";
import {
  getTotalPrice,
  removeFromCart,
  updateQuantity,
  checkoutCart,
  CHECKOUT_STATE,
} from "./cartSlice";

import styles from "./Cart.module.css";

export function Cart() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.list);
  const items = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector(getTotalPrice);
  const checkoutState = useAppSelector((state) => state.cart.checkoutState);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  const handleUpdateQuantity = (event, id) => {
    const quantity = Number(event.target.value) || 0;
    dispatch(updateQuantity({ id, quantity }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(checkoutCart(items));
  }

  const tableClasses = classNames({
    [styles.table]: true,
    [styles.checkoutError]: checkoutState === CHECKOUT_STATE.ERROR,
    [styles.checkoutLoading]: checkoutState === CHECKOUT_STATE.LOADING,
  });

  return (
    <main className="page">
      <h1>Shopping Cart</h1>
      <table className={tableClasses}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
        {Object.entries(items).map(([id, quantity]) => (
            <tr key={id}>
              <td>{products[id].name}</td>
              <td>
                <input
                  type="text"
                  className={styles.input}
                  defaultValue={quantity}
                  // https://redux.js.org/style-guide/#avoid-putting-form-state-in-redux
                  onBlur={(e) => handleUpdateQuantity(e, id)}
                />
              </td>
              <td>${products[id].price}</td>
              <td>
                <button
                  aria-label={`Remove ${products[id].name}} from Shopping Cart`}
                  onClick={() => { handleRemoveFromCart(id) }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td className={styles.total}>${totalPrice}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <form onSubmit={handleSubmit}>
        <button className={styles.button} type="submit">
          Checkout
        </button>
      </form>
    </main>
  );
}
