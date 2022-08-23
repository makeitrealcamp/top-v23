import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/store";
import { getNumItems, getMemorizedNumItems } from "./cartSlice";

import styles from "./CartLink.module.css";

export function CartLink() {
  const numItems = useAppSelector(getMemorizedNumItems);
  return (
    <Link to="/cart" className={styles.link}>
      <span className={styles.text}>
        🛒&nbsp;&nbsp;{numItems ? numItems : "Cart"}
      </span>
    </Link>
  );
}
