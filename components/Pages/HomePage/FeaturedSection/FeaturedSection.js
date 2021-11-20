import React from "react";
import ProductList from "../../../Product/ProductList";

import classes from "./FeaturedSection.module.css";

const FeaturedSection = () => {
  return (
    <React.Fragment>
      <h3 className={classes.header}>Featured Products</h3>
      <ProductList />
    </React.Fragment>
  );
};

export default FeaturedSection;
