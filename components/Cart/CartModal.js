import React, { useState } from "react";
import Backdrop from "../GeneralLayout/Backdrop";
import Modal from "../GeneralLayout/Modal";
import Cart from "./Cart";
import styles from "./CartModal.module.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

const CartModal = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(uiActions.toggleOpenCart());
  };
  return (
    <React.Fragment>
      <Backdrop closeBackdrop={closeModal} />
      <Modal>
        <h2 className={styles.header}>Your Cart</h2>
        <Cart />
      </Modal>
    </React.Fragment>
  );
};

export default CartModal;
