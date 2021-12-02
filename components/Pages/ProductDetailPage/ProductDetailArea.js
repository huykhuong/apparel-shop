import React, { useState } from "react";
import styles from "./ProductDetailArea.module.css";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const ProductDetailArea = (props) => {
  const [amountCounter, setAmountCounter] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [warningState, setWarningState] = useState(false);

  const dispatch = useDispatch();

  //Save selected size to state manager function
  const selectSize = (size) => {
    setSelectedSize(size);
    if (selectedSize === size) {
      setSelectedSize(null);
    }
  };

  //Increase amount
  const increaseAmount = () => {
    setAmountCounter((prevValue) => prevValue + 1);
  };

  //Decrease amount
  const decreaseAmount = () => {
    if (amountCounter === 1) {
      return;
    }
    setAmountCounter((prevValue) => prevValue - 1);
  };

  //addToCart function
  const addItemToCart = () => {
    if (selectedSize === null) {
      setWarningState(true);
      return;
    }
    setWarningState(false);
    dispatch(
      cartActions.addItemToCart({
        id: "01",
        price: 265.5,
        size: selectedSize,
        amount: amountCounter,
        name: "Drop type cushion chair",
        imgUrl:
          "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      })
    );
  };

  return (
    <React.Fragment>
      <div className={styles.product_detail_area}>
        <p className={styles.category}>{props.category}</p>
        <h1 className={styles.product_name}>{props.name}</h1>
        <div className={styles.review}>
          <AiFillStar /> &nbsp;
          <span className={styles.review_point}>8/10</span> <BsDot />{" "}
          <span className={styles.total_review}>15 Reviews</span>
        </div>
        <p className={styles.description}>{props.description}</p>
        <ul className={styles.size_list}>
          {props.sizes.map((size) => (
            <li
              className={
                selectedSize === size
                  ? `${styles.selected_size_element} ${styles.size_element}`
                  : styles.size_element
              }
              onClick={() => selectSize(size)}
            >
              {size}
            </li>
          ))}
          <p
            className={
              warningState
                ? `${styles.warning} ${styles.warning_visible} `
                : styles.warning
            }
          >
            Please choose a size
          </p>
        </ul>

        <h3>${props.price}</h3>
        <div className={styles.actions_btn}>
          <button onClick={decreaseAmount} className={styles.minus}>
            -
          </button>
          <p className={styles.amount_counter}>{amountCounter}</p>
          <button onClick={increaseAmount} className={styles.plus}>
            +
          </button>
        </div>
        <button onClick={addItemToCart} className={styles.add_to_cart_btn}>
          Add To Cart
        </button>
      </div>
    </React.Fragment>
  );
};

export default ProductDetailArea;
