import React from "react";
import classes from "./CartItem.module.css";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const decreaseAmount = () => {
    dispatch(
      cartActions.decreaseItemAmount({
        id: props.id,
        size: props.size,
      })
    );
  };

  const increaseAmount = () => {
    dispatch(
      cartActions.increaseItemAmount({
        id: props.id,
        size: props.size,
      })
    );
  };

  const removeItem = () => {
    dispatch(
      cartActions.removeItem({
        id: props.id,
        size: props.size,
      })
    );
  };

  return (
    <li className={classes.cart_item}>
      <div className={classes.img_container}>
        <img className={classes.img} src={props.image} alt="product_image" />
      </div>
      <div className={classes.summary}>
        <h3>{props.name}</h3>
        <p>{props.size}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={decreaseAmount} className={classes.minus}>
          -
        </button>
        <p className={classes.amount_counter}>{props.amount}</p>
        <button onClick={increaseAmount} className={classes.plus}>
          +
        </button>
      </div>
      <div className={classes.price}>
        <h3>${props.price}</h3>
      </div>
      <button onClick={removeItem} className={classes.remove_btn}>
        <IoClose />
      </button>
    </li>
  );
};

export default CartItem;
