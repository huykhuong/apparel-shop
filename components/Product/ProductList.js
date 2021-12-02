import React from "react";
import Product from "./Product";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        {props.items.slice(0, props.visible_items).map((item) => (
          <Product
            key={item.id}
            id={item.id}
            img={item.images[0]}
            price={item.price}
            title={item.name}
            gender={item.gender}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProductList;
