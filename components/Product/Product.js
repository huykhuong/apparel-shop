import React from "react";
import classes from "./Product.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Product = (props) => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.img_container}>
          <img src={props.img} alt={props.title} />
        </div>
        <div className={classes.product_info}>
          <p className={classes.product_title}>{props.title}</p>
          <p>{props.price}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
