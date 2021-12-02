import React from "react";
import styles from "./ProductImageArea.module.css";

const ProductImageArea = (props) => {
  const sub_images = [];
  for (let index = 1; index < props.images.length; index++) {
    sub_images.push(props.images[index]);
  }
  return (
    <React.Fragment>
      <div className={styles.product_image_area}>
        <div className={styles.product_image}>
          <img src={props.images[0]}></img>
        </div>
        <div className={styles.product_sub_images}>
          {sub_images.map((image) => (
            <img src={image}></img>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductImageArea;
