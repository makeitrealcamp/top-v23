import ItemCart from "./ItemCart"

const items = [
  { name: "Sony DSC-RX100M III", price: 849.99, quantity: 1, img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" },
  { name: "KS Automatic Mechanic...", price: 1249.99, quantity: 1, img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" },
  { name: "Kindle, 6\" Glare-Free To...", price: 129.99, quantity: 1, img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" }
]

const CartList = (props) => {
  return(
    <ul className="shopping-cart-items">
      {
        items.map((item, index) => (
          <ItemCart key={index} item={item} />
        ))
      }
    </ul>
  )
}

export default CartList
