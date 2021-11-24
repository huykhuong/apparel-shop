import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.items);
  return (
    <React.Fragment>
      <ul>
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
      </ul>
    </React.Fragment>
  );
};

export default Cart;
