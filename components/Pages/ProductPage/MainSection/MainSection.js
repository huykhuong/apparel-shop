import React from "react";
import Backdrop from "../../../GeneralLayout/Backdrop";
import ProductList from "../../../Product/ProductList";
import classes from "./MainSection.module.css";

const MainSection = (props) => {
  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <h1 className={classes.category_name}>{props.category}</h1>
        <ProductList />
      </div>
    </React.Fragment>
  );
};

export default MainSection;
