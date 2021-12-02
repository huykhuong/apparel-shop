import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.items);

  return (
    <React.Fragment>
      <ul className={styles.cart_items_list}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            size={item.size}
            amount={item.amount}
            price={item.totalPrice}
          />
        ))}
        {cartItems.length === 0 && <p>Your cart is empty</p>}
      </ul>
    </React.Fragment>
  );
};

export default Cart;
