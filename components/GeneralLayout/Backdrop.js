import React from "react";
import classes from "./Backdrop.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Backdrop = (props) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(uiActions.toggleOpenCart());
  };
  return <div onClick={closeModal} className={classes.backdrop}></div>;
};

export default Backdrop;
