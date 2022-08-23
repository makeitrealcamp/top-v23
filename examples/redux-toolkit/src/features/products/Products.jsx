import { useEffect } from "react";

import {  useAppSelector, useAppDispatch } from "../../hooks/store";
import { receivedProducts } from './productSlice'
import { addToCart } from "../cart/cartSlice";
import { getProducts } from "../../services/api";
import styles from "./Products.module.css";

export function Products() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.list);

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  }

  useEffect(() => {
    getProducts().then((products) => {
      dispatch(receivedProducts(products));
    });
  }, []);

  return (
    <main className="page">
      <ul className={styles.products}>
        {Object.values(products).map((product) => (
          <li key={product.id}>
            <article className={styles.product}>
              <figure>
                <img src={product.imageURL} alt={product.imageAlt} />
                <figcaption className={styles.caption}>
                  {product.imageCredit}
                </figcaption>
              </figure>
              <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={() => { handleAddToCart(product.id) }}>
                  Add to Cart 🛒
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
