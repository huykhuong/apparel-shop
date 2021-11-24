import React from "react";
import Backdrop from "../GeneralLayout/Backdrop";
import Modal from "../GeneralLayout/Modal";
import Cart from "./Cart";

const CartModal = () => {
  return (
    <React.Fragment>
      <Backdrop />
      <Modal>
        <h2>Your Cart</h2>
        <Cart />
      </Modal>
    </React.Fragment>
  );
};

export default CartModal;
