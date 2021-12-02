import React from "react";
import classes from "./Product.module.css";
import Link from "next/link";

const Product = (props) => {
  let href = "";
  if (props.gender === "women") {
    href = "/products/women/" + props.id;
  } else {
    href = "/products/men/" + props.id;
  }

  return (
    <React.Fragment>
      <Link href={href}>
        <div className={classes.container} id={props.id}>
          <div className={classes.img_container}>
            <img src={props.img} alt={props.title} />
          </div>
          <div className={classes.product_info}>
            <p className={classes.product_title}>{props.title}</p>
            <p>{props.price}</p>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default Product;
