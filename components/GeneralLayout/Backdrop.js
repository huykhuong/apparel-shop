import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return <div onClick={props.closeBackdrop} className={classes.backdrop}></div>;
};

export default Backdrop;
