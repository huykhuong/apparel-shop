import React, { useEffect, useState } from "react";
import ProductList from "../../../Product/ProductList";

import classes from "./FeaturedSection.module.css";

const FeaturedSection = (props) => {
  const [visible, setIsVisible] = useState(3);
  const [disabled, setDisabled] = useState(false);

  const showMoreItem = () => {
    setIsVisible((prev) => prev + 3);
  };

  useEffect(() => {
    if (visible === props.items.length) {
      setDisabled(true);
    }
  }, [visible]);

  return (
    <React.Fragment>
      <h3 className={classes.header}>Featured Products</h3>
      <ProductList
        visible_items={visible}
        items={props.items}
        href="http://localhost:3000/"
      />
      <button
        className={disabled ? classes.hide_btn : classes.view_more_button}
        onClick={showMoreItem}
      >
        View More
      </button>
    </React.Fragment>
  );
};

export default FeaturedSection;
