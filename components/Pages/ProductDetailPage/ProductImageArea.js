import React from "react";
import styles from "./ProductImageArea.module.css";

const ProductImageArea = (props) => {
  return (
    <React.Fragment>
      <div className={styles.product_image_area}>
        <div className={styles.product_image}>
          <img src="https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936"></img>
        </div>
        <div className={styles.product_sub_images}>
          <img src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320"></img>
          <img src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320"></img>
          <img src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320"></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductImageArea;
