import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={classes.footer_container}>
        <div className={classes.footer}>
          <p className={classes.brand}>Ecovani</p>
          <div id={classes["copyright"]}>
            <AiOutlineCopyrightCircle />
            <p>Copyright, 2021</p>
          </div>
        </div>
        <div className={classes.footer}>
          <p className={classes.header}>Homepage</p>
          <p>Something</p>
          <p>Something</p>
          <p>Something</p>
        </div>
        <div className={classes.footer}>
          <p className={classes.header}>About</p>
          <p>About Company</p>
          <p>Something</p>
          <p>Something</p>
        </div>
        <div className={classes.footer}>
          <p className={classes.header}>Others</p>
          <p>About Company</p>
          <p>Something</p>
          <p>Something</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
