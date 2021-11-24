import React from "react";
import ProductImageArea from "../../../../components/Pages/ProductDetailPage/ProductImageArea";
import ProductDetailArea from "../../../../components/Pages/ProductDetailPage/ProductDetailArea";
import styles from "../../../../styles/ProductDetailPage.module.css";

const ProductDetail = (props) => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <ProductImageArea />
        <ProductDetailArea />
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;
