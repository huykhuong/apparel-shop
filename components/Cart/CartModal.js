import React from "react";
import Backdrop from "../GeneralLayout/Backdrop";
import Modal from "../GeneralLayout/Modal";

const CartModal = (props) => {
  return (
    <React.Fragment>
      <Backdrop />
      <Modal children={props.children} />
    </React.Fragment>
  );
};

export default CartModal;
